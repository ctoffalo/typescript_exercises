# syntax=docker/dockerfile:1

# 1️⃣ Base Node image (official Node 20)
FROM node:20-bullseye-slim AS base

# 2️⃣ Set working dir (this will be the mount point in the compose file)
WORKDIR /app

# 3️⃣ Copy package files first – allows Docker cache reuse for deps
COPY package.json package-lock.json* ./

# 4️⃣ Install dependencies (devDependencies included)
#    We keep the cache alive when only source changes.
RUN npm install

# 5️⃣ Copy the rest of the source code
COPY . .

RUN echo 'export PATH="$PATH:/app/node_modules/.bin"' >> ~/.bashrc
CMD ["bash"]
