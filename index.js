const core = require('@actions/core');
const github = require('@actions/github');

try {
  const runNumber = core.getInput('run_number');
  const refType = github.context.eventName === 'push' && github.context.payload.ref_type === 'tag';
  const tagName = refType ? github.context.ref.replace('refs/tags/', '') : runNumber;
  core.setOutput('tag_name', tagName);
} catch (error) {
  core.setFailed(error.message);
}
