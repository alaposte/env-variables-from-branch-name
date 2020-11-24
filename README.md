# Export env from branch name

An action that takes the branch name and returns the corresponding secret variable name that has to be used to set the corresponding env variable.
example:
- the branch name is `master`. 
- the env variable we want to use is `API_KEY`
- it returns `API_KEY_MASTER` as a string value

## Inputs

### `key`

**Required** The variable name to return with `_${BRANCH}` as suffixe.

## Outputs

### `variable`

The full variable name that will be used later to set the env variable from `secrets`

## Example usage

If the branch name is `develop`
```
uses: actions/hello-world-javascript-action@v1.1
with:
    name: TEST
run: echo ${TEST_DEVELOP}
```