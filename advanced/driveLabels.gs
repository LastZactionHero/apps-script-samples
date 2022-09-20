/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
 // Test change, do not commit

 // [START apps_script_drive_labels_list_labels]
/**
 * List labels available to the user.
 */
function listLabels() {
  let pageToken = null;
  let labels = [];
  do {
    try {
      const response = DriveLabels.Labels.list({publishedOnly: true, pageToken: pageToken})
      pageToken = response.nextPageToken;
      labels = labels.concat(response.labels);
    } catch (err) {
      // TODO (developer) - Handle exception
      Logger.log('Failed to list labels with error %s', err.message);
    }
  } while (pageToken != null);
 
  Logger.log('Found %d labels', labels.length);
  console.log(labels[0].name)
}
// [END apps_script_drive_labels_list_labels]
 
// [START apps_script_drive_labels_get_label]
/**
 * Get a label by name.
 */
function getLabel(labelName) {
  try {
    const label = DriveLabels.Labels.get(labelName, {view: "LABEL_VIEW_FULL"});
    Logger.log("Fetched label with title: '%s' and %d fields.", label.properties.title, label.fields.length);
  } catch (err) {
    // TODO (developer) - Handle exception
    Logger.log('Failed to get label with error %s', err.message);
  }
}
// [END apps_script_drive_labels_get_label]