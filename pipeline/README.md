This directory contains a Jenkinsfile which can be used to build
node-demo using an OpenShift build pipeline.

To do this, run:

```bash
# create the node-demo example as usual
oc new-app https://github.com/zonesan/node-demo

# now create the pipeline build controller from the `pipeline`
# subdirectory
oc new-app https://github.com/zonesan/node-demo \
  --context-dir=pipeline --name node-demo-pipeline
```
