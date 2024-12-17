/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig, ControlSetRow } from '../types';
import {
  groupByHiddenControl,
  contributionModeControl,
  xAxisForceCategoricalControl,
  xAxisSortAscControl,
  xAxisSortControl,
  xAxisSortSeriesAscendingControl,
  xAxisSortSeriesControl,
} from '../shared-controls';

const controlsWithoutXAxis: ControlSetRow[] = [
  ['metrics'],
  ['groupby'],
  [groupByHiddenControl],
  [contributionModeControl],
  ['adhoc_filters'],
  ['limit'],
  ['timeseries_limit_metric'],
  ['order_desc'],
  ['row_limit'],
  ['truncate_metric'],
  ['show_empty_columns'],
  ['waterfall_view'],
  ['connect_points'],
];

export const echartsTimeSeriesQuery: ControlPanelSectionConfig = {
  label: t('Query'),
  expanded: true,
  controlSetRows: [['x_axis'], ['time_grain_sqla'], ...controlsWithoutXAxis],
};

export const echartsTimeSeriesQueryWithXAxisSort: ControlPanelSectionConfig = {
  label: t('Query'),
  expanded: true,
  controlSetRows: [
    ['x_axis'],
    ['time_grain_sqla'],
    [xAxisForceCategoricalControl],
    [xAxisSortControl],
    [xAxisSortAscControl],
    [xAxisSortSeriesControl],
    [xAxisSortSeriesAscendingControl],
    ...controlsWithoutXAxis,
  ],
};
