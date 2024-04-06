npx release-it

# 获取package.json中的版本号
export APP_VERSION=$(jq -r '.version' package.json)
echo $APP_VERSION

# pnpm build:web
# pnpm build:web:rm:sourcemap

# node ./docker-web/tencent.js

# pnpm clean
