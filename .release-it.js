module.exports = {
	"hooks": {},
	"git": {
		"changelog": "git log --pretty=format:\"* %s (%h)\" ${from}...${to}",
		"requireCleanWorkingDir": true,
		"requireBranch": false,
		"requireUpstream": true,
		"requireCommits": false,
		"requireCommitsFail": true,
		"commitsPath": "",
		"addUntrackedFiles": false,
		"commit": true,
		"commitMessage": "chore: release ${version}",
		"commitArgs": [],
		"tag": true,
		"tagExclude": null,
		"tagName": "release-v${version}",
		"tagMatch": null,
		"tagAnnotation": "Release ${version}",
		"tagArgs": [],
		"push": true,
		"pushArgs": ["--follow-tags"],
		"pushRepo": ""
	},
	"npm": {
		"publish": false,
	},
	"plugins": {
		"@release-it/conventional-changelog": {
			"preset": {
				"name": "conventionalcommits",
				"types": [
					{ "type": "feat", "section": "✨ Features | 新功能" },
					{ "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
					{ "type": "perf", "section": "⚡ Performance Improvements | 性能优化" },
					{ "type": "revert", "section": "⏪ Reverts | 回退" },
					{ "type": "chore", "section": "📦 Chores | 其他更新" },
					{ "type": "docs", "section": "📝 Documentation | 文档" },
					{ "type": "style", "section": "💄 Styles | 风格" },
					{ "type": "refactor", "section": "♻ Code Refactoring | 代码重构" },
					{ "type": "test", "section": "✅ Tests | 测试" },
					{ "type": "build", "section": "👷‍ Build System | 构建" },
					{ "type": "ci", "section": "🔧 Continuous Integration | CI 配置" }
				],
			},
			"infile": false,
			"ignoreRecommendedBump": true,
			"releaseSummary": true,
			"template": {
				"commit": "- {{header}}\n",
				"commitScope": "{{scope}}",
				"featType": "✨ ",
				"fixType": "🐛 "
			}
		}
	},
	"github": {
		"release": {
			"name": "v${version}",
			"body": "${changelog}"
		},
		"releaseName": "v${version}",
		"releaseNotes": null,
		"autoGenerate": false,
		"preRelease": false,
		"draft": false,
		"tokenRef": "GITHUB_TOKEN",
		"assets": null,
		"host": null,
		"timeout": 0,
		"proxy": null,
		"skipChecks": false,
		"web": false
	},
}
