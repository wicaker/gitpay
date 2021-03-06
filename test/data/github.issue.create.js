module.exports.issue = {
    "action": "opened",
    "issue": {
      "url": "https://api.github.com/repos/worknenjoy/gitpay/issues/244",
      "repository_url": "https://api.github.com/repos/worknenjoy/gitpay",
      "labels_url": "https://api.github.com/repos/worknenjoy/gitpay/issues/244/labels{/name}",
      "comments_url": "https://api.github.com/repos/worknenjoy/gitpay/issues/244/comments",
      "events_url": "https://api.github.com/repos/worknenjoy/gitpay/issues/244/events",
      "html_url": "https://github.com/worknenjoy/gitpay/issues/244",
      "id": 394650647,
      "node_id": "MDU6SXNzdWUzOTQ2NTA2NDc=",
      "number": 244,
      "title": "The filters and tabs on task list is not opening a new tab",
      "user": {
        "login": "alexanmtz",
        "id": 88840,
        "node_id": "MDQ6VXNlcjg4ODQw",
        "avatar_url": "https://avatars2.githubusercontent.com/u/88840?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alexanmtz",
        "html_url": "https://github.com/alexanmtz",
        "followers_url": "https://api.github.com/users/alexanmtz/followers",
        "following_url": "https://api.github.com/users/alexanmtz/following{/other_user}",
        "gists_url": "https://api.github.com/users/alexanmtz/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alexanmtz/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alexanmtz/subscriptions",
        "organizations_url": "https://api.github.com/users/alexanmtz/orgs",
        "repos_url": "https://api.github.com/users/alexanmtz/repos",
        "events_url": "https://api.github.com/users/alexanmtz/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alexanmtz/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 988235282,
          "node_id": "MDU6TGFiZWw5ODgyMzUyODI=",
          "url": "https://api.github.com/repos/worknenjoy/gitpay/labels/React",
          "name": "React",
          "color": "e4ed6d",
          "default": false
        },
        {
          "id": 577780158,
          "node_id": "MDU6TGFiZWw1Nzc3ODAxNTg=",
          "url": "https://api.github.com/repos/worknenjoy/gitpay/labels/bug",
          "name": "bug",
          "color": "ee0701",
          "default": true
        },
        {
          "id": 577780160,
          "node_id": "MDU6TGFiZWw1Nzc3ODAxNjA=",
          "url": "https://api.github.com/repos/worknenjoy/gitpay/labels/enhancement",
          "name": "enhancement",
          "color": "84b6eb",
          "default": true
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": {
        "url": "https://api.github.com/repos/worknenjoy/gitpay/milestones/3",
        "html_url": "https://github.com/worknenjoy/gitpay/milestone/3",
        "labels_url": "https://api.github.com/repos/worknenjoy/gitpay/milestones/3/labels",
        "id": 3797469,
        "node_id": "MDk6TWlsZXN0b25lMzc5NzQ2OQ==",
        "number": 3,
        "title": "v1.6",
        "description": "Bug fixes about payment and flow for user, as well fixings for language preferences",
        "creator": {
          "login": "alexanmtz",
          "id": 88840,
          "node_id": "MDQ6VXNlcjg4ODQw",
          "avatar_url": "https://avatars2.githubusercontent.com/u/88840?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/alexanmtz",
          "html_url": "https://github.com/alexanmtz",
          "followers_url": "https://api.github.com/users/alexanmtz/followers",
          "following_url": "https://api.github.com/users/alexanmtz/following{/other_user}",
          "gists_url": "https://api.github.com/users/alexanmtz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/alexanmtz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/alexanmtz/subscriptions",
          "organizations_url": "https://api.github.com/users/alexanmtz/orgs",
          "repos_url": "https://api.github.com/users/alexanmtz/repos",
          "events_url": "https://api.github.com/users/alexanmtz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/alexanmtz/received_events",
          "type": "User",
          "site_admin": false
        },
        "open_issues": 31,
        "closed_issues": 5,
        "state": "open",
        "created_at": "2018-11-05T17:47:56Z",
        "updated_at": "2019-01-04T18:03:57Z",
        "due_on": null,
        "closed_at": null
      },
      "comments": 3,
      "created_at": "2018-12-28T14:38:35Z",
      "updated_at": "2019-01-06T00:17:41Z",
      "closed_at": null,
      "author_association": "CONTRIBUTOR",
      "body": "On places that we have the task list like here: [https://gitpay.me/#/tasks/explore](https://gitpay.me/#/tasks/explore) we need to make the tabs and filter regular links to be able to open in a new tab (accessibility) and to be persisted as well (added on the url like https://gitpay.me/#/tasks/explore/open for open tasks, for example)\r\n\r\n### Why\r\nWe need to improve our task list for accessibility and to persist the states of filters and tabs\r\n\r\n### Level\r\nBeginner\r\n\r\n### Current behavior\r\nWhen the user click on any link on the task list, like the filters (open, in progress, done) or on the tabs (created by me etc) the links not persist and if we try to open a new tab is not possible.\r\n\r\n### Expected behavior\r\nWhen the user click on any link on the task list, like the filters (open, in progress, done) or on the tabs (created by me etc) the links should persist as a different url and we should be able to open in a new tab.\r\n\r\n### Useful links\r\n  - https://github.com/ReactTraining/react-router\r\n\r\n### How to solve this issue\r\n - Probably you will have to create new routes to handle the states\r\n - You will have to change the way we link using regular links, using `<Link />` from react-router\r\n\r\n### How to reproduce the user scenario\r\n - Open task list explore: [https://gitpay.me/#/tasks/explore](https://gitpay.me/#/tasks/explore)\r\n\r\n"
    },
    "comment": {
      "url": "https://api.github.com/repos/worknenjoy/gitpay/issues/comments/451703995",
      "html_url": "https://github.com/worknenjoy/gitpay/issues/244#issuecomment-451703995",
      "issue_url": "https://api.github.com/repos/worknenjoy/gitpay/issues/244",
      "id": 451703995,
      "node_id": "MDEyOklzc3VlQ29tbWVudDQ1MTcwMzk5NQ==",
      "user": {
        "login": "alexanmtz",
        "id": 88840,
        "node_id": "MDQ6VXNlcjg4ODQw",
        "avatar_url": "https://avatars2.githubusercontent.com/u/88840?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alexanmtz",
        "html_url": "https://github.com/alexanmtz",
        "followers_url": "https://api.github.com/users/alexanmtz/followers",
        "following_url": "https://api.github.com/users/alexanmtz/following{/other_user}",
        "gists_url": "https://api.github.com/users/alexanmtz/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alexanmtz/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alexanmtz/subscriptions",
        "organizations_url": "https://api.github.com/users/alexanmtz/orgs",
        "repos_url": "https://api.github.com/users/alexanmtz/repos",
        "events_url": "https://api.github.com/users/alexanmtz/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alexanmtz/received_events",
        "type": "User",
        "site_admin": false
      },
      "created_at": "2019-01-06T00:17:41Z",
      "updated_at": "2019-01-06T00:17:41Z",
      "author_association": "CONTRIBUTOR",
      "body": "great @yuritoledo and the migrations is working now as well?"
    },
    "repository": {
      "id": 87405108,
      "node_id": "MDEwOlJlcG9zaXRvcnk4NzQwNTEwOA==",
      "name": "gitpay",
      "full_name": "worknenjoy/gitpay",
      "private": false,
      "owner": {
        "login": "worknenjoy",
        "id": 26957748,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjI2OTU3NzQ4",
        "avatar_url": "https://avatars1.githubusercontent.com/u/26957748?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/worknenjoy",
        "html_url": "https://github.com/worknenjoy",
        "followers_url": "https://api.github.com/users/worknenjoy/followers",
        "following_url": "https://api.github.com/users/worknenjoy/following{/other_user}",
        "gists_url": "https://api.github.com/users/worknenjoy/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/worknenjoy/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/worknenjoy/subscriptions",
        "organizations_url": "https://api.github.com/users/worknenjoy/orgs",
        "repos_url": "https://api.github.com/users/worknenjoy/repos",
        "events_url": "https://api.github.com/users/worknenjoy/events{/privacy}",
        "received_events_url": "https://api.github.com/users/worknenjoy/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/worknenjoy/gitpay",
      "description": "Work on issues on demand and be rewarded by learning, using Git workflow and continuous integration",
      "fork": false,
      "url": "https://api.github.com/repos/worknenjoy/gitpay",
      "forks_url": "https://api.github.com/repos/worknenjoy/gitpay/forks",
      "keys_url": "https://api.github.com/repos/worknenjoy/gitpay/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/worknenjoy/gitpay/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/worknenjoy/gitpay/teams",
      "hooks_url": "https://api.github.com/repos/worknenjoy/gitpay/hooks",
      "issue_events_url": "https://api.github.com/repos/worknenjoy/gitpay/issues/events{/number}",
      "events_url": "https://api.github.com/repos/worknenjoy/gitpay/events",
      "assignees_url": "https://api.github.com/repos/worknenjoy/gitpay/assignees{/user}",
      "branches_url": "https://api.github.com/repos/worknenjoy/gitpay/branches{/branch}",
      "tags_url": "https://api.github.com/repos/worknenjoy/gitpay/tags",
      "blobs_url": "https://api.github.com/repos/worknenjoy/gitpay/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/worknenjoy/gitpay/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/worknenjoy/gitpay/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/worknenjoy/gitpay/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/worknenjoy/gitpay/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/worknenjoy/gitpay/languages",
      "stargazers_url": "https://api.github.com/repos/worknenjoy/gitpay/stargazers",
      "contributors_url": "https://api.github.com/repos/worknenjoy/gitpay/contributors",
      "subscribers_url": "https://api.github.com/repos/worknenjoy/gitpay/subscribers",
      "subscription_url": "https://api.github.com/repos/worknenjoy/gitpay/subscription",
      "commits_url": "https://api.github.com/repos/worknenjoy/gitpay/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/worknenjoy/gitpay/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/worknenjoy/gitpay/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/worknenjoy/gitpay/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/worknenjoy/gitpay/contents/{+path}",
      "compare_url": "https://api.github.com/repos/worknenjoy/gitpay/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/worknenjoy/gitpay/merges",
      "archive_url": "https://api.github.com/repos/worknenjoy/gitpay/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/worknenjoy/gitpay/downloads",
      "issues_url": "https://api.github.com/repos/worknenjoy/gitpay/issues{/number}",
      "pulls_url": "https://api.github.com/repos/worknenjoy/gitpay/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/worknenjoy/gitpay/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/worknenjoy/gitpay/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/worknenjoy/gitpay/labels{/name}",
      "releases_url": "https://api.github.com/repos/worknenjoy/gitpay/releases{/id}",
      "deployments_url": "https://api.github.com/repos/worknenjoy/gitpay/deployments",
      "created_at": "2017-04-06T08:25:47Z",
      "updated_at": "2019-01-05T13:10:27Z",
      "pushed_at": "2019-01-05T13:10:27Z",
      "git_url": "git://github.com/worknenjoy/gitpay.git",
      "ssh_url": "git@github.com:worknenjoy/gitpay.git",
      "clone_url": "https://github.com/worknenjoy/gitpay.git",
      "svn_url": "https://github.com/worknenjoy/gitpay",
      "homepage": "http://gitpay.me",
      "size": 21748,
      "stargazers_count": 15,
      "watchers_count": 15,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 24,
      "mirror_url": null,
      "archived": false,
      "open_issues_count": 45,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 24,
      "open_issues": 45,
      "watchers": 15,
      "default_branch": "master"
    },
    "organization": {
      "login": "worknenjoy",
      "id": 26957748,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjI2OTU3NzQ4",
      "url": "https://api.github.com/orgs/worknenjoy",
      "repos_url": "https://api.github.com/orgs/worknenjoy/repos",
      "events_url": "https://api.github.com/orgs/worknenjoy/events",
      "hooks_url": "https://api.github.com/orgs/worknenjoy/hooks",
      "issues_url": "https://api.github.com/orgs/worknenjoy/issues",
      "members_url": "https://api.github.com/orgs/worknenjoy/members{/member}",
      "public_members_url": "https://api.github.com/orgs/worknenjoy/public_members{/member}",
      "avatar_url": "https://avatars1.githubusercontent.com/u/26957748?v=4",
      "description": ""
    },
    "sender": {
      "login": "alexanmtz",
      "id": 88840,
      "node_id": "MDQ6VXNlcjg4ODQw",
      "avatar_url": "https://avatars2.githubusercontent.com/u/88840?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/alexanmtz",
      "html_url": "https://github.com/alexanmtz",
      "followers_url": "https://api.github.com/users/alexanmtz/followers",
      "following_url": "https://api.github.com/users/alexanmtz/following{/other_user}",
      "gists_url": "https://api.github.com/users/alexanmtz/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/alexanmtz/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/alexanmtz/subscriptions",
      "organizations_url": "https://api.github.com/users/alexanmtz/orgs",
      "repos_url": "https://api.github.com/users/alexanmtz/repos",
      "events_url": "https://api.github.com/users/alexanmtz/events{/privacy}",
      "received_events_url": "https://api.github.com/users/alexanmtz/received_events",
      "type": "User",
      "site_admin": false
    },
    "installation": {
      "id": 1234,
      "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uNTU5NjEx"
    }
  }