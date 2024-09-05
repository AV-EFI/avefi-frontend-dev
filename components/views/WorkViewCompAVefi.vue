<template>
  <div>
    <div
      v-if="mir"
    >
      <div class="mb-2">
        <h2
          class="text-lg mb-2 dark:text-primary-100 text-ellipsis text-wrap overflow-hidden max-w-full"
          :alt="mir.has_primary_title.has_name"
        >
          {{ mir.has_primary_title.has_name }}
        </h2>
        <div class="grid-container">
          <div class="mb-2">
            <span v-if="mir.type">
              {{ $t(mir.type?? '') }} | 
            </span>
            <span>
              {{ $t(mir.category || '') }}
            </span>
          </div>
          <div class="grid md:grid-cols-12 gap-2 grid-flow-dense xs:auto-cols-min">
            <!--left-->
            <div class="md:col-span-8 col-span-12">
              <div v-if="mir.same_as">
                <DetailSameAsComp :same-as-data="mir.same_as" />
              </div>
              <div class="mb-2">
                <h2 class="dark:text-primary-100">
                  EFI:
                </h2>
                <GlobalClipboardComp :display-text="data?._source?.handle" />
              </div>
              <!-- has_alternative_title -->
              <div
                v-if="mir.has_alternative_title"
                class="col-span-12"
              >
                <h2 class="dark:text-primary-100">
                  {{ $t('AlternativeTitle') }}:
                </h2>
                <div 
                  v-for="(has_alttitle_item, alttitle_index) in mir.has_alternative_title"
                  :key="alttitle_index"
                  class="grid grid-cols-7 gap-3 event"
                >
                  <div class="col-span-full md:col-span-7">
                    {{ has_alttitle_item.has_name }} ({{ $t(has_alttitle_item.type) }})
                  </div>
                </div>
              </div>
            </div>

            <!--right-->
            <div class="col-span-12 md:col-span-4">
              <div class="grid grid-cols-12 gap-2 ">
                <!-- Genre -->
                <div class="col-span-12 md:col-span-4">
                  <h2 class="md:float-right dark:text-primary-100">
                    {{ $t('avefi:Genre') }}:
                  </h2>
                </div>
                <div class="col-span-12 md:col-span-8">
                  <ul>
                    <li
                      v-for="(has_genre_item, has_genre_index) in mir.has_genre"
                      :key="has_genre_index"
                    >
                      {{ has_genre_item.has_name }}
                    </li>
                  </ul>
                </div>
                <!-- Subject -->
                <div class="col-span-12 md:col-span-4">
                  <h2 class="md:float-right dark:text-primary-100">
                    {{ $t('avefi:Subject') }}:
                  </h2>
                </div>
                <div class="col-span-12 md:col-span-8 h-64 overflow-x-auto">
                  <ul>
                    <li
                      v-for="(has_subject_item, has_subject_index) in mir.has_subject"
                      :key="has_subject_index"
                    >                    
                      {{ has_subject_item.has_name }}
                      <span
                        v-for="(same_as_item, same_as_index) in has_subject_item.same_as"
                        :key="same_as_index"
                      > |
                        <a
                          v-if="same_as_item.category === 'avefi:GNDResource'"
                          class="link link-primary link-hover"
                          :href="`https://explore.gnd.network/gnd/${same_as_item.id}`"
                          alt="Referenz bei GND"
                          title="Referenz bei GND"
                          target="_blank"
                        >
                          <Icon
                            name="fa-regular:address-card"
                            size="1em"
                            alt="Referenz bei GND"
                          /> 
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-4 mb-4">
    
      <div>
        <div class="grid-container">
          <div class="grid grid-cols-12 gap-2 ">
            <!-- has_event -->
            <div class="col-span-12 md:col-span-7">
              <div
                v-for="(has_event_item, event_index) in mir.has_event"
                :key="event_index"
                class="grid grid-cols-7 gap-3 event"
              >
                <div class="col-span-full">
                  <h2 class=" dark:text-primary-100">
                    {{ $t(has_event_item.category) }}
                  </h2>
                </div>
                <div class="col-span-full md:col-span-2">
                  <span class="font-bold text-primary-900 dark:text-primary-100 md:float-right capitalize">
                    {{ $t('year') }}:
                  </span>
                </div>
                <div class="col-span-full md:col-span-5">
                  {{ has_event_item.has_date }}
                </div>
                <div
                  v-if="has_event_item.located_in"
                  class="col-span-full md:col-span-2"
                >
                  <span class="font-bold text-primary-900 dark:text-primary-100 md:float-right capitalize">
                    {{ $t('place') }}:
                  </span>
                </div>
                <div class="col-span-full md:col-span-5">
                  <ul>
                    <li
                      v-for="(located_in_item, located_in_index) in has_event_item.located_in"
                      :key="located_in_index"
                    >
                      {{ located_in_item.has_name }}
                    </li>
                  </ul>
                </div>
                <!-- has_activity -->
                <div 
                  v-for="(has_activity_item, activity_index) in has_event_item.has_activity"
                  :key="activity_index"
                  class="grid col-span-7 grid-cols-7 gap-3 activity"
                >
                  <div class="col-span-full md:col-span-6">
                    <h2 class="text-primary-800 dark:text-primary-100">
                      {{ $t(has_activity_item.category) }}
                    </h2>
                  </div>
                  <div class="col-span-full md:col-span-2">
                    <span class="text-md font-bold text-primary-900  dark:text-primary-100 md:float-right">
                      {{ $t(has_activity_item.type) }}:
                    </span>
                  </div>
                  <!-- has_agent -->
                  <div
                    class="col-span-full md:col-span-5"
                  >
                    <ul>
                      <li
                        v-for="(has_agent_item, agent_index) in has_activity_item.has_agent"
                        :key="agent_index"
                      >
                        <strong>{{ $t(has_agent_item.type) }}:</strong><br>
                        {{ has_agent_item.has_name }}
                        <span v-if="has_agent_item.same_as">
                          <DetailSameAsComp :same-as-data="has_agent_item.same_as" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="col-span-full md:col-span-5">
              <div class="grid grid-cols-6 gap-3">
                <div class="col-span-full md:col-span-2" />
                <div class="col-span-full md:col-span-4" />
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-4">
          <div class="grid grid-cols-12 gap-2">
            <!-- Described by -->
            <div
              v-if="mir.described_by"
              class="col-span-full md:col-span-2"
            >
              <span class="text-md font-bold text-primary-900  dark:text-primary-100 md:float-right">Described by:</span>
            </div>
            <div class="col-span-full md:col-span-8">
              <p>{{ mir.described_by?.has_issuer_name }}</p>
              <a 
                :href="mir.described_by?.has_issuer_id"
                class="link link-primary link-hover"
                alt="Referenz bei ISIL"
                title="Referenz bei ISIL"
                target="_blank"
              >
                {{ mir.described_by?.has_issuer_id }}
              </a>
              <p>{{ new Date(mir.described_by?.last_modified??'').toLocaleString('de-DE') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <pre>{{ mir }}</pre>
    </div>
  </div>
  <hr class="mt-4 mb-4">
  <div v-if="status === 'pending'">
    Loading Manifestations ...
  </div>
  <div v-else>
    <h2>{{ $t('manifestations') }}</h2>
    <table class="table table-zebra table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Titel</th>
          <th>Filmhaltende Institution</th>
          <th>Detailansicht</th>            
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="manifestation in manifestations"
          :key="manifestation._id"
        >
          <td>{{ manifestation?._id }}</td>
          <td>{{ manifestation?._source?.has_record?.has_primary_title.has_name }}</td>
          <td>-</td>
          <td class="flex justify-center">
            <a
              :href="`/film/${manifestation._id}`"
            >
              <Icon
                class="text-2xl"
                name="bx:detail"
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div />
</template>

<script setup lang="ts">
//models\interfaces\av_efi_schema.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type {WorkVariant} from '../../models/interfaces/av_efi_schema.ts';
const dataJson = defineModel({type: String, required: true});
const data = JSON.parse(dataJson.value);
const mir:WorkVariant = data?._source?.has_record;
console.log(data._id);
const { status, data: manifestations } = useFetch('/api/elastic/search', 
    {
        method: 'POST',
        lazy: false,
        body: {
            id: "21.11155/"+data._id
        }
    });
console.log(manifestations);

</script>
