/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import _ from 'lodash';

import prompts from './docker-prompts.mjs';
import BlueprintBaseGenerator from '../base/index.mjs';
import { GENERATOR_DOCKER_COMPOSE } from '../generator-list.mjs';
import { loadFromYoRc, checkDocker, checkImages, generateJwtSecret, setAppsFolderPaths } from './docker-base.mjs';
import statistics from '../statistics.cjs';
import { applicationOptions, deploymentOptions } from '../../jdl/jhipster/index.mjs';

import constants from '../generator-constants.cjs';
import { dockerPlaceholderGenerator, getDockerfileContainers } from '../docker/utils.mjs';

const { OptionNames } = applicationOptions;
const { Options: DeploymentOptions } = deploymentOptions;

const { JWT_SECRET_KEY } = OptionNames;

/**
 * @class
 * @extends {BlueprintBaseGenerator}
 */
export default class BaseDockerGenerator extends BlueprintBaseGenerator {
  constructor(args, options, features) {
    super(args, options, features);

    // This adds support for a `--skip-checks` flag
    this.option('skip-checks', {
      desc: 'Check the status of the required tools',
      type: Boolean,
      defaults: false,
    });

    // This adds support for a `--skip-prompts` flag
    this.option('skip-prompts', {
      desc: 'Generate pre-existing configuration',
      type: Boolean,
      defaults: false,
    });

    this.regenerate = this.options.skipPrompts;
    this.skipChecks = this.options.skipChecks;
  }

  get initializing() {
    return {
      validateFromCli() {
        this.checkInvocationFromCLI();
      },

      async setupServerConsts() {
        const dockerfile = this.readTemplate(this.jhipsterTemplatePath('../../server/templates/Dockerfile'));
        this.dockerContainers = this.prepareDependencies(
          {
            ...constants.dockerContainers,
            ...getDockerfileContainers(dockerfile),
          },
          dockerPlaceholderGenerator
        );

        // Make constants available in templates
        this.DOCKER_KAFKA = constants.DOCKER_KAFKA;
        this.DOCKER_ZOOKEEPER = constants.DOCKER_ZOOKEEPER;
        this.DOCKER_JHIPSTER_REGISTRY = constants.DOCKER_JHIPSTER_REGISTRY;
        this.DOCKER_JHIPSTER_CONTROL_CENTER = constants.DOCKER_JHIPSTER_CONTROL_CENTER;
        this.DOCKER_CONSUL = constants.DOCKER_CONSUL;
        this.DOCKER_CONSUL_CONFIG_LOADER = constants.DOCKER_CONSUL_CONFIG_LOADER;
        this.DOCKER_PROMETHEUS = constants.DOCKER_PROMETHEUS;
        this.DOCKER_PROMETHEUS_ALERTMANAGER = constants.DOCKER_PROMETHEUS_ALERTMANAGER;
        this.DOCKER_GRAFANA = constants.DOCKER_GRAFANA;

        this.DOCKER_MYSQL = constants.DOCKER_MYSQL;
        this.DOCKER_MSSQL = constants.DOCKER_MSSQL;
        this.DOCKER_MARIADB = constants.DOCKER_MARIADB;
        this.DOCKER_MONGODB = constants.DOCKER_MONGODB;
        this.DOCKER_NEO4J = constants.DOCKER_NEO4J;
        this.DOCKER_COUCHBASE = constants.DOCKER_COUCHBASE;
        this.DOCKER_MEMCACHED = constants.DOCKER_MEMCACHED;
        this.DOCKER_REDIS = constants.DOCKER_REDIS;
        this.DOCKER_PROMETHEUS_OPERATOR = constants.DOCKER_PROMETHEUS_OPERATOR;
        this.DOCKER_GRAFANA_WATCHER = constants.DOCKER_GRAFANA_WATCHER;
        this.DOCKER_ZIPKIN = constants.DOCKER_ZIPKIN;

        this.DOCKER_CASSANDRA = constants.DOCKER_CASSANDRA;
        this.DOCKER_GRAFANA = constants.DOCKER_GRAFANA;
      },

      checkDocker,

      loadConfig() {
        loadFromYoRc.call(this);
      },
    };
  }

  get prompting() {
    return {
      askForApplicationType: prompts.askForApplicationType,
      askForGatewayType: prompts.askForGatewayType,
      askForPath: prompts.askForPath,
      askForApps: prompts.askForApps,
      askForClustersMode: prompts.askForClustersMode,
      askForMonitoring: prompts.askForMonitoring,
      askForConsoleOptions: prompts.askForConsoleOptions,
      askForServiceDiscovery: prompts.askForServiceDiscovery,
      askForAdminPassword: prompts.askForAdminPassword,
    };
  }

  get configuring() {
    return {
      insight() {
        statistics.sendSubGenEvent('generator', GENERATOR_DOCKER_COMPOSE);
      },

      checkImages,
      generateJwtSecret,
      setAppsFolderPaths,
    };
  }

  loadDeploymentConfig(
    config = _.defaults({}, this.jhipsterConfig, DeploymentOptions.defaults(this.jhipsterConfig.deploymentType)),
    dest = this
  ) {
    dest.appsFolders = config.appsFolders;
    dest.directoryPath = config.directoryPath;
    dest.gatewayType = config.gatewayType;
    dest.clusteredDbApps = config.clusteredDbApps;
    dest.dockerRepositoryName = config.dockerRepositoryName;
    dest.dockerPushCommand = config.dockerPushCommand;
    dest.adminPassword = config.adminPassword;
    dest.jwtSecretKey = config[JWT_SECRET_KEY];
    this.loadPlatformConfig(config, dest);
  }
}
