import core from "@actions/core";

async function run() {
  try {
    const branchName = process.env.GITHUB_REF.split("/").slice(2).join("/");
    if (!branchName) {
      throw Error("No branch name found");
    }
    core.info(`Using "${branchName}" branch`);

    const key = core.getInput("key");
    core.info(`Getting secrets prefixed by "${key}"`);

    const variable = `${key.toUpperCase()}_${branchName.toUpperCase()}`;
    core.info(`Returning "${variable}" as `);

    core.setOutput("variable", variable);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
