import { defineConfig } from 'cypress';
import {
  addCucumberPreprocessorPlugin,
  afterRunHandler,
} from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import fs from 'fs';
import dotenv from 'dotenv';
import urls from './cypress/urls.json';
dotenv.config({ path: 'cypress/.env' });

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true,
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  on('after:run', async (results) => {
    if (results) {
      await afterRunHandler(config);
      fs.writeFileSync(
        'cypress/reports/results.json',
        JSON.stringify(
          {
            browserName: results.browserName,
            browserVersion: results.browserVersion,
            osName: results.osName,
            osVersion: results.osVersion,
            nodeVersion: results.config.resolvedNodeVersion,
            cypressVersion: results.cypressVersion,
            startedTestsAt: results.startedTestsAt,
            endedTestsAt: results.endedTestsAt,
          },
          null,
          '\t'
        )
      );
    }
  });
  return config;
};

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: urls[process.env.ENV] || process.env.DEFAULT_BASE_URL,
    specPattern: '**/*.feature',
    supportFile: false,
    setupNodeEvents,
    experimentalInteractiveRunEvents: true,
  },
});
