# syntax=docker/dockerfile:1

################################################################################
# development
################################################################################
FROM node:20-bookworm AS development

COPY . /workspace

ENTRYPOINT [ "sleep", "infinity" ]

################################################################################
# build
################################################################################
FROM node:20-bookworm AS build
WORKDIR /src

RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=bind,source=tsconfig.json,target=tsconfig.json \
  --mount=type=bind,source=src,target=src \
  --mount=type=cache,target=/root/.npm,sharing=locked \
  npm ci && npm run build

################################################################################
# runner
################################################################################
FROM node:20-bookworm as runner

ENV NODE_ENV=production

RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  npm ci --omit=dev && npm cache clean --force
COPY --from=build /src/dist /src

EXPOSE 3000

ENTRYPOINT [ "node", "/src/index.js" ]
