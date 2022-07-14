import { Octokit } from "@octokit/rest";
var Owners;
(function (Owners) {
    Owners["giacomogagliano"] = "giacomogagliano";
    Owners["zionPTC"] = "Zion-PTC";
})(Owners || (Owners = {}));
export class ZionGitHub {
    zionOctoKit;
    options;
    /**
     *
     * @param auth Personal Authorization Token from GitHub.
     * @param userAgent `optional`
     * @param timeZone `optional`
     * @param log `optional`
     * @param request `optional`
     */
    constructor(auth, userAgent = "Zion v0.0.1", timeZone = "Europe/Rome", log = {
        debug: () => console.log(),
        info: () => { },
        warn: console.warn,
        error: console.error,
    }, request = {
        agent: undefined,
        fetch: undefined,
        timeout: 0,
    }) {
        this.options = {
            auth,
            userAgent,
            timeZone,
            log,
            request,
        };
        this.zionOctoKit = new Octokit(this.options);
    }
    async getRepos() {
        let res = await this.zionOctoKit.paginate(this.zionOctoKit.repos.listForAuthenticatedUser);
        const regexp = /.*(?=\/)/g;
        return res.map((repo) => [
            repo.full_name.match(regexp)?.filter((res) => res !== "")[0],
            repo.name,
        ]);
    }
    async createRepoForAuthUser(name) {
        await this.zionOctoKit.repos.createForAuthenticatedUser({
            name,
        });
    }
    async createRepoForOrg(org, name) {
        await this.zionOctoKit.repos.createInOrg({
            org: Owners[org],
            name,
        });
    }
    async deleteRepo(owner, repo) {
        await this.zionOctoKit.repos.delete({
            owner: Owners[owner],
            repo,
        });
    }
}
