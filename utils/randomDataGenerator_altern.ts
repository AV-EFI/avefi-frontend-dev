/* eslint-disable camelcase */
//import type IAVefiWork from '../models/interfaces/IAVefiWork';
import { fakerDE as faker } from '@faker-js/faker';
import * as fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import type { IAVefiListResponse } from "../models/interfaces/IAVefiWork";
//import type { IAVefiData } from "../models/interfaces/IAVefiWork";
import { TitleTypeEnum, type MovingImageRecord, type Title, type Event, WorkFormEnum, type Genre, type SubjectHeading, type WorkVariant, WorkVariantTypeEnum, type MovingImageRecordCollection, type Activity, ActivityTypeEnum, type Agent, type GeographicName } from '../models/interfaces/av_efi_schema';

// Generate random data functions
const generateRandomMovingImageRecord = (size: number = 1): MovingImageRecord[] | null => {

    const movingImageRecord = [] as MovingImageRecord[];
    for (let i = 0; i < size; i++) {
        const primaryTitle = generateRandomTitle()?.at(0);
        if (primaryTitle) {
            movingImageRecord.push({
                // Implement generation logic for MovingImageRecord properties
                //has_event
                has_event: generateRandomEvent(),
                //id
                id: faker.string.uuid(),
                //altenative_title
                alternative_title: generateRandomTitle(),
                //primary_title
                primary_title: primaryTitle,
                //sort_name
                sort_name: primaryTitle.value,
                category: "MovingImageRecord"
            });
        }
    }
    if (movingImageRecord) {
        return movingImageRecord;
    }
    return null;
};

const generateRandomWorkVariant = (): WorkVariant | null => {
    // Generate random WorkVariant data
    const primary_title = generateRandomTitle()?.at(0);
    if (primary_title) {
        return {
            id: faker.string.uuid(),
            category: "WorkVariant",
            primary_title: primary_title,
            has_form: faker.helpers.arrayElement(Object.values(WorkFormEnum)),
            has_genre: generateRandomGenre(),
            has_related_term: generateRandomSubjectHeading(),
            has_work_variant: [{ id: faker.string.uuid(), category: "AVefiResource" }],
            same_as: [{ id: faker.string.uuid(), category: "AuthorityResource" }],
            type: faker.helpers.arrayElement(Object.values(WorkVariantTypeEnum)),
            variant_type: faker.helpers.arrayElement(Object.values(WorkVariantTypeEnum)),

        };
    }
    return null;
};

const generateRandomMovingImageRecordCollection = (jsonArrayLength: number): MovingImageRecordCollection => {
    // Generate random MovingImageRecordCollection data
    const records: MovingImageRecordCollection = {
        category: "MovingImageRecordCollection",
        has_record: [] as MovingImageRecord[]
    };

    for (let i = 0; i < jsonArrayLength; i++) {
        try {
            const record = generateRandomMovingImageRecord(10);
            console.log(record);
            if (record) {
                records.has_record?.push(...record);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    return records;
};

const createRandomDataJson = ((length: number) => {

    // Generate random JSON objects
    const jsonArray = generateRandomMovingImageRecordCollection(length);

    // Convert array of JSON objects to a string
    const jsonString = JSON.stringify(jsonArray, null, 2);

    // Write JSON string to a file
    fs.writeFile(`./models/sampleData/random_av_efi_schema_${length}.json`, jsonString, (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('JSON file has been saved!');
        }
    });
});



function generateRandomEvent(size: number = 1): Event[] | undefined {
    const events = [] as Event[];
    if (size) {
        for (let i = 0; i < size; i++) {
            /**
             * has_activity?: Activity[],
                has_end_date ?: string,
                has_start_date ?: string,
                located_in ?: GeographicName[],
                type: string,
             */
            const has_activity = generateRandomActivity();
            const has_start_date = faker.date.past().toISOString();
            const has_end_date = faker.date.past().toISOString();
            const located_in = generateRandomGeographicName();
            const type = faker.helpers.enumValue(TitleTypeEnum);
            const category = "Event";
            events.push({ has_activity, type, category, has_start_date, has_end_date, located_in });
        }
    }
    return events;
}

function generateRandomActivity(size: number = 1): Activity[] | undefined {
    const activities = [] as Activity[];
    if (size) {
        for (let i = 0; i < size; i++) {
            /**
             * has_agent: Agent[],
                type: string,
             */
            const has_agent = generateRandomAgent();
            const type = faker.helpers.enumValue(ActivityTypeEnum);
            const category = "Activity";
            if (has_agent) {
                activities.push({ type, category, has_agent });
            }
        }
    }
    return activities;
}

function generateRandomAgent(size: number = 1): Agent[] | undefined {
    const agents = [] as Agent[];
    if (size) {
        for (let i = 0; i < size; i++) {
            /*
                alternate_name?: string[],
                name ?: string,
                same_as ?: AuthorityResource[],
             */
            const name = faker.word.words(10);
            const alternate_name = [faker.word.words(10)];
            const same_as = [{
                id: `${faker.internet.url({ appendSlash: true })}${faker.number.int(100000)}`,
                category: "AuthorityResource"
            }];
            const category = "Agent";
            agents.push({ name, alternate_name, category, same_as });
        }
    }
    return agents;
}

function generateRandomGeographicName(size: number = 1): GeographicName[] | undefined {
    const geographicNames = [] as GeographicName[];
    if (size) {
        for (let i = 0; i < size; i++) {
            /*
                alternate_name?: string[],
                name: string,
                same_as ?: AuthorityResource[],
            */
            const name = faker.location.countryCode();
            const alternate_name = [faker.location.country()];
            const category = "GeographicName";
            const same_as = [{
                id: `${faker.internet.url({ appendSlash: true })}${faker.number.int(100000)}`,
                category: "AuthorityResource"
            }];
            geographicNames.push({ name, alternate_name, category, same_as });
        }
    }
    return geographicNames;
}

function generateRandomTitle(size: number = 1): Title[] | undefined {
    const titles = [] as Title[];
    if (size) {
        for (let i = 0; i < size; i++) {
            const value = faker.word.words({ count: { min: 1, max: 10 } });
            const type = faker.helpers.enumValue(TitleTypeEnum);
            const category = "Title";
            titles.push({ value, type, category });
        }
    }
    return titles;
}

function generateRandomGenre(size: number = 1): Genre[] | undefined {
    const genres = [] as Genre[];
    if (size) {
        for (let i = 0; i < size; i++) {
            const name = faker.word.words({ count: { min: 1, max: 10 } });
            const count = faker.number.int({ min: 1, max: 10 });
            const alternate_name: string[] = faker.helpers.multiple(() => {
                return faker.word.words({ count: { min: 1, max: 10 } });
            }, { count: count }
            );
            const category = "Genre";
            genres.push({ name, alternate_name, category });
        }
    }
    return genres;
}

function generateRandomSubjectHeading(size: number = 1): SubjectHeading[] | undefined {
    const subjectHeadings = [] as SubjectHeading[];
    if (size) {
        for (let i = 0; i < size; i++) {
            const name = faker.word.words({ count: { min: 1, max: 10 } });
            const count = faker.number.int({ min: 1, max: 10 });
            const alternate_name: string[] = faker.helpers.multiple(() => {
                return faker.word.words({ count: { min: 1, max: 10 } });
            }, { count: count }
            );
            const category = "SubjectHeading";
            subjectHeadings.push({ name, alternate_name, category });
        }
    }
    return subjectHeadings;
}

createRandomDataJson(10);