/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var HIGHLIGHT_ANIMATION_DURATION = 100,
  TOP_N_WEIGHTED_POSITIVE_LIWC = 3,
  TOP_N_WEIGHTED_NEGATIVE_LIWC = 3,
  WORD_TRAIT_CORR_TYPE = {
    positive: 'positive',
    negative: 'negative'
  };

var COLOR_SCHEMA = {
  'emotion_tone': '#5596e6',
  'Anger': '#5596e6',
  'sadness': '#5596e6',
  'anxiety': '#5596e6',
  'Negative': '#5596e6',
  'Cheerfulness': '#5596e6',
  'writing_tone': '#5596e6',
  'causation': '#5596e6',
  'Analytical': '#5596e6',
  'Tentative': '#5596e6',
  'insight': '#5596e6',
  'certainty': '#5596e6',
  'Confident': '#5596e6',
  'social_tone': '#5596e6',
  'family_c': '#5596e6',
  'Conscientiousness_Big5': '#5596e6',
  'friends': '#5596e6',
  'Openness_Big5': '#5596e6',
  'leisure': '#5596e6',
  'Agreeableness_Big5': '#5596e6',
  'refs_to_others': '#5596e6',
  'distant': '#5596e6'
};

var SAMPLE_TEXT = '' + 'Paste in your essay here... The Collegiate Club will give more accurate responses as essays get longer.'