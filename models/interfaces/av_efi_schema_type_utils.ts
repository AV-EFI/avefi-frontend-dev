/* eslint-disable camelcase */
/* eslint-disable no-extra-semi */
export type MovingImageRecordId = string;
export type WorkVariantId = string;
export type ManifestationOrItemId = string;
export type ManifestationId = string;
export type ItemId = string;
export type AuthorityResourceId = string;
export type DOIResourceId = string;
export type AVefiResourceId = string;
export type FilmportalResourceId = string;
export type GNDResourceId = string;
export type ISILResourceId = string;
export type VIAFResourceId = string;
export type WikidataResourceId = string;

export enum ActivityTypeEnum {

    /** FIAF Glossary of Filmographic Terms B.4.11 */
    Adaptation = "Adaptation",
    /** FIAF Glossary of Filmographic Terms B.13.1 */
    Animation = "Animation",
    /** FIAF Glossary of Filmographic Terms B.6.2 */
    ArtDirector = "ArtDirector",
    /** FIAF Glossary of Filmographic Terms B.6.3 */
    AssistantArtDirector = "AssistantArtDirector",
    /** FIAF Glossary of Filmographic Terms B.3.2 */
    AssistantDirector = "AssistantDirector",
    /** FIAF Glossary of Filmographic Terms B.10.2 */
    AssistantFilmEditor = "AssistantFilmEditor",
    /** FIAF Glossary of Filmographic Terms B.2.6 */
    AssociateProducer = "AssociateProducer",
    /** FIAF Glossary of Filmographic Terms B.5.7 */
    CameraAssistant = "CameraAssistant",
    /** FIAF Glossary of Filmographic Terms B.3.4 */
    CastingDirector = "CastingDirector",
    /** FIAF Glossary of Filmographic Terms B.11.15 */
    Choreographer = "Choreographer",
    /** FIAF Glossary of Filmographic Terms B.5.1 */
    Cinematographer = "Cinematographer",
    /** FIAF Glossary of Filmographic Terms B.3.5 */
    Continuity = "Continuity",
    /** FIAF Glossary of Filmographic Terms B.6.12 */
    CostumeDesigner = "CostumeDesigner",
    /** FIAF Glossary of Filmographic Terms B.3.1 */
    Director = "Director",
    /** FIAF Glossary of Filmographic Terms B.5.13 */
    Electrician = "Electrician",
    /** FIAF Glossary of Filmographic Terms B.2.4 */
    ExecutiveProducer = "ExecutiveProducer",
    /** FIAF Glossary of Filmographic Terms B.10.1 */
    FilmEditor = "FilmEditor",
    /** FIAF Glossary of Filmographic Terms B.9.9 */
    FoleyArtist = "FoleyArtist",
    /** FIAF Glossary of Filmographic Terms B.5.11 */
    GafferLighting = "GafferLighting",
    /** FIAF Glossary of Filmographic Terms B.6.16 */
    Gowns = "Gowns",
    /** FIAF Glossary of Filmographic Terms B.4.6 */
    Idea = "Idea",
    /** FIAF Glossary of Filmographic Terms B.2.7 */
    LineProducer = "LineProducer",
    /** FIAF Glossary of Filmographic Terms B.5.9 */
    LoaderClapper = "LoaderClapper",
    /** FIAF Glossary of Filmographic Terms B.2.12 */
    LocationManager = "LocationManager",
    /** FIAF Glossary of Filmographic Terms B.6.19 */
    MakeUpArtist = "MakeUpArtist",
    /** FIAF Glossary of Filmographic Terms B.11.3 */
    MusicSupervisor = "MusicSupervisor",
    /** FIAF Glossary of Filmographic Terms B.4.15 */
    NarrationWriter = "NarrationWriter",
    /** FIAF Glossary of Filmographic Terms B.2.3 */
    Producer = "Producer",
    /** FIAF Glossary of Filmographic Terms B.2.14 */
    ProductionAssistant = "ProductionAssistant",
    /** FIAF Glossary of Filmographic Terms B.6.1 */
    ProductionDesigner = "ProductionDesigner",
    /** FIAF Glossary of Filmographic Terms B.6.7 */
    PropertyMaster = "PropertyMaster",
    /** FIAF Glossary of Filmographic Terms B.4.16 */
    Research = "Research",
    /** FIAF Glossary of Filmographic Terms B.3.3 */
    SecondUnitDirector = "SecondUnitDirector",
    /** FIAF Glossary of Filmographic Terms B.5.2 */
    SecondUnitDirectorofPhotography = "SecondUnitDirectorofPhotography",
    /** FIAF Glossary of Filmographic Terms B.6.6 */
    SetDecorator = "SetDecorator",
    /** FIAF Glossary of Filmographic Terms B.6.5 */
    SetDesigner = "SetDesigner",
    /** FIAF Glossary of Filmographic Terms B.11.8 */
    SingingVoice = "SingingVoice",
    /** FIAF Glossary of Filmographic Terms B.9.1 */
    SoundDesigner = "SoundDesigner",
    /** FIAF Glossary of Filmographic Terms B.9.7 */
    SoundEditor = "SoundEditor",
    /** FIAF Glossary of Filmographic Terms B.9.3 */
    SoundRecorderMixer = "SoundRecorderMixer",
    /** FIAF Glossary of Filmographic Terms B.4.4 */
    SourceMaterial = "SourceMaterial",
    /** FIAF Glossary of Filmographic Terms B.8.1 */
    SpecialEffects = "SpecialEffects",
    /** FIAF Glossary of Filmographic Terms B.5.6 */
    SteadicamOperator = "SteadicamOperator",
    /** FIAF Glossary of Filmographic Terms B.5.18 */
    StillPhotographer = "StillPhotographer",
    /** FIAF Glossary of Filmographic Terms B.6.4 */
    StoryboardArtist = "StoryboardArtist",
    /** FIAF Glossary of Filmographic Terms B.3.6 */
    StuntArranger = "StuntArranger",
    /** FIAF Glossary of Filmographic Terms B.6.21 */
    TitleDesigner = "TitleDesigner",
    /** FIAF Glossary of Filmographic Terms B.8.2 */
    VisualEffects = "VisualEffects",
    /** FIAF Glossary of Filmographic Terms B.4.2 */
    Writer = "Writer",
};

export enum EventTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.4.7 */
    ManufactureEvent = "ManufactureEvent",
    /** FIAF Moving Image Cataloguing Manual D.14 */
    FilmPrintingEvent = "FilmPrintingEvent",
    /** FIAF Moving Image Cataloguing Manual D.14 */
    MasteringEvent = "MasteringEvent",
    /** FIAF Moving Image Cataloguing Manual D.14 */
    ScanningEvent = "ScanningEvent",
    /** FIAF Moving Image Cataloguing Manual D.14 */
    TelecineEvent = "TelecineEvent",
    /** FIAF Moving Image Cataloguing Manual D.14 */
    UploadingEvent = "UploadingEvent",
    /** FIAF Moving Image Cataloguing Manual D.14 */
    VideoCopyingEvent = "VideoCopyingEvent",
    /** FIAF Moving Image Cataloguing Manual D.4.5 */
    PreservationEvent = "PreservationEvent",
    /** FIAF Moving Image Cataloguing Manual D.12 */
    DigitisationEvent = "DigitisationEvent",
    /** FIAF Moving Image Cataloguing Manual D.12 */
    DuplicationEvent = "DuplicationEvent",
    /** FIAF Moving Image Cataloguing Manual D.12 */
    ReproductionEvent = "ReproductionEvent",
    /** FIAF Moving Image Cataloguing Manual D.12 */
    TransferEvent = "TransferEvent",
    /** FIAF Moving Image Cataloguing Manual D.4.3 */
    ProductionEvent = "ProductionEvent",
    /** FIAF Moving Image Cataloguing Manual D.11 */
    CastingEvent = "CastingEvent",
    /** FIAF Moving Image Cataloguing Manual D.11 */
    IndoorShootingEvent = "IndoorShootingEvent",
    /** FIAF Moving Image Cataloguing Manual D.11 */
    OutdoorShootingEvent = "OutdoorShootingEvent",
    /** FIAF Moving Image Cataloguing Manual D.11 */
    PostProductionEvent = "PostProductionEvent",
    /** FIAF Moving Image Cataloguing Manual D.4.1 */
    PublicationEvent = "PublicationEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    BroadcastEvent = "BroadcastEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    DistributionEvent = "DistributionEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    HomeVideoPublicationEvent = "HomeVideoPublicationEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    NonTheatricalDistributionEvent = "NonTheatricalDistributionEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    NotForReleaseEvent = "NotForReleaseEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    OnlineTransmissionEvent = "OnlineTransmissionEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    PreReleaseEvent = "PreReleaseEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    ReleaseEvent = "ReleaseEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    TheatricalDistributionEvent = "TheatricalDistributionEvent",
    /** FIAF Moving Image Cataloguing Manual D.10 */
    UnknownEvent = "UnknownEvent",
    /** FIAF Moving Image Cataloguing Manual D.4.4 */
    RightsCopyrightRegistrationEvent = "RightsCopyrightRegistrationEvent",
};

export enum FormatAudioTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_16mmMagneticTrack = "16mmMagneticTrack",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_35mmMagneticTrack = "35mmMagneticTrack",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    Audiocassette = "Audiocassette",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    HalfInchAudioReel = "HalfInchAudioReel",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    OneInchAudioReel = "OneInchAudioReel",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    QuarterInchAudioReel = "QuarterInchAudioReel",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    TwoInchAudioReel = "TwoInchAudioReel",
};

export enum FormatDigitalFileEncodingTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    MPEG4 = "MPEG4",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    Quicktime = "Quicktime",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    RealVideo = "RealVideo",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    SVCD = "SVCD",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    VCD = "VCD",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    WindowsMedia = "WindowsMedia",
};

export enum FormatDigitalFileTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    AVI = "AVI",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    DPX = "DPX",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    MOV = "MOV",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    MP4 = "MP4",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    MXF = "MXF",
};

export enum FormatFilmTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_16mmFilm = "16mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_17FULL_STOP5mmFilm = "17.5mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_35mmFilm = "35mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_70mmFilm = "70mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_8mmFilm = "8mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_9FULL_STOP5mmFilm = "9.5mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    Super16mmFilm = "Super16mmFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    Super8mmFilm = "Super8mmFilm",
};

export enum FormatOpticalTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    BluRay = "BluRay",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    CD = "CD",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    DVD = "DVD",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    LaserDisc = "LaserDisc",
};

export enum FormatVideoTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_1InchCFormat = "1InchCFormat",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    number_2InchQuadruplex = "2InchQuadruplex",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    BetacamSP = "BetacamSP",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    D1 = "D1",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    D5 = "D5",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    DVCPROHD = "DVCPROHD",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    DigitalBetacam = "DigitalBetacam",
    /** FIAF Moving Image Cataloguing Manual D.7.2 */
    HDCAMSR = "HDCAMSR",
};

export enum ItemAccessStatusEnum {

    Archive = "Archive",
    Distribution = "Distribution",
    /** FIAF Moving Image Cataloguing Manual D.7.3 */
    Master = "Master",
    /** FIAF Moving Image Cataloguing Manual D.7.3 */
    Removed = "Removed",
    /** FIAF Moving Image Cataloguing Manual D.7.3 */
    Viewing = "Viewing",
};

export enum ItemElementTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    ColourNegative = "ColourNegative",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    ColourPositive = "ColourPositive",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    CopperTonedPositive = "CopperTonedPositive",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    CyanMatrix = "CyanMatrix",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    DCP = "DCP",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    DirectBWPositive = "DirectBWPositive",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    DuplicateNegative = "DuplicateNegative",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    DuplicatePositive = "DuplicatePositive",
    /** FIAF Moving Image Cataloguing Manual 3.1.4 */
    Element = "Element",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    ImageNegative = "ImageNegative",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    Lavender = "Lavender",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    OriginalNegative = "OriginalNegative",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    OriginalPositiveReversalFilm = "OriginalPositiveReversalFilm",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    Positive = "Positive",
    /** FIAF Moving Image Cataloguing Manual D.7.8 */
    SoundNegative = "SoundNegative",
};

export enum LanguageUsageEnum {

    /** Audio description for the visually impaired */
    AudioDescription = "AudioDescription",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    Captions = "Captions",
    ClosingCredits = "ClosingCredits",
    /** FIAF Moving Image Cataloguing Manual 2.3.3 */
    Dubbed = "Dubbed",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    Intertitles = "Intertitles",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    NoDialogue = "NoDialogue",
    OpeningCredits = "OpeningCredits",
    /** Subtitles for the Deaf and Hard of hearing */
    SDHSubtitles = "SDHSubtitles",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    SignedLanguage = "SignedLanguage",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    SpokenLanguage = "SpokenLanguage",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    Subtitles = "Subtitles",
    /** FIAF Moving Image Cataloguing Manual D.6 */
    SungLanguage = "SungLanguage",
    VoiceOver = "VoiceOver",
};

export enum ManifestationTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.5.7 */
    Broadcast = "Broadcast",
    /** FIAF Moving Image Cataloguing Manual D.5.6 */
    HomeViewingPublication = "HomeViewingPublication",
    /** FIAF Moving Image Cataloguing Manual D.5.8 */
    Internet = "Internet",
    /** FIAF Moving Image Cataloguing Manual D.5.3 */
    NonTheatricalDistribution = "NonTheatricalDistribution",
    /** FIAF Moving Image Cataloguing Manual D.5.4 */
    NotForRelease = "NotForRelease",
    /** FIAF Moving Image Cataloguing Manual D.5.1 */
    PreRelease = "PreRelease",
    /** FIAF Moving Image Cataloguing Manual D.5.9 */
    PreservationRestoration = "PreservationRestoration",
    /** FIAF Moving Image Cataloguing Manual D.5.2 */
    TheatricalDistribution = "TheatricalDistribution",
    /** FIAF Moving Image Cataloguing Manual D.5.10 */
    Unknown = "Unknown",
    /** FIAF Moving Image Cataloguing Manual D.5.5 */
    Unreleased = "Unreleased",
};

export enum TitleTypeEnum {

    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    AbbreviatedTitle = "AbbreviatedTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    AcquisitionTitle = "AcquisitionTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4 */
    AlternativeTitle = "AlternativeTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    CorrectedTitle = "CorrectedTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    PreReleaseTitle = "PreReleaseTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.0 */
    PreferredTitle = "PreferredTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    SearchTitle = "SearchTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    SeriesTitle = "SeriesTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.5 */
    SuppliedDevisedTitle = "SuppliedDevisedTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.2 */
    TitleProper = "TitleProper",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    TranslatedTitle = "TranslatedTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    TransliteratedTitle = "TransliteratedTitle",
    /** FIAF Moving Image Cataloguing Manual A.2.4.1 */
    WorkingTitle = "WorkingTitle",
};

export enum WorkVariantTypeEnum {

    Analytic = "Analytic",
    Collection = "Collection",
    Monographic = "Monographic",
    Serial = "Serial",
};

export enum WorkFormEnum {

    /** FIAF Glossary of Filmographic Terms D.1.9 */
    AmateurFilm = "AmateurFilm",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Compilation = "Compilation",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Excerpt = "Excerpt",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Feature = "Feature",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Featurette = "Featurette",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    HomeMovie = "HomeMovie",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Outtake = "Outtake",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    ScreenTest = "ScreenTest",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Series = "Series",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Short = "Short",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    StockFootage = "StockFootage",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    Trailer = "Trailer",
    /** FIAF Glossary of Filmographic Terms D.1.9 */
    UneditedFootage = "UneditedFootage",
    /** FIAF Moving Image Cataloguing Manual E.2.2 */
    AnthologyFilm = "AnthologyFilm",
    /** FIAF Moving Image Cataloguing Manual E.2.2 */
    Commercial = "Commercial",
    /** FIAF Moving Image Cataloguing Manual 0.1.2, D.5.3 */
    EducationalFilm = "EducationalFilm",
    /** FIAF Moving Image Cataloguing Manual 0.1.2 */
    EssayFilm = "EssayFilm",
    /** FIAF Moving Image Cataloguing Manual 0.1.2 */
    ExperimentalFilm = "ExperimentalFilm",
    /** FIAF Moving Image Cataloguing Manual D.5.3 */
    IndustrialFilm = "IndustrialFilm",
    /** FIAF Moving Image Cataloguing Manual D.18 */
    MusicVideo = "MusicVideo",
    /** http://www.screenonline.org.uk/film/id/476463/index.html */
    Newsreel = "Newsreel",
};


/**
 * A generic grouping for all described things
 */
export interface Entity {
    category: string,
}


export function isEntity(o: object): o is Entity {
    return (
        'category' in o
    )
}

export function toEntity(o: Entity): Entity {
    return {
        category: o.category ?? null
    }
}


export interface MovingImageRecord extends Entity {
    has_event?: Event[],
    /** A unique identifier for a thing */
    id: string,
    /** Additional title(s) associated with the work / variant, manifestation, or item. */
    alternative_title?: Title[],
    /** Primary title to be displayed in search results etc. The type should be PreferredTitle for works / variants and TitleProper for manifestations / items. If not available, type must be SuppliedDevisedTitle, instead. */
    primary_title: Title,
    /** Altered value of primary_title if required for proper sorting in search result lists. Leave empty if not required. */
    sort_name?: string,
}


export function isMovingImageRecord(o: object): o is MovingImageRecord {
    return (
        'id' in o &&
        'primary_title' in o &&
        'category' in o
    )
}

export function toMovingImageRecord(o: MovingImageRecord): MovingImageRecord {
    return {
        has_event: o.has_event ?? [],
        id: o.id ?? null,
        alternative_title: o.alternative_title ?? [],
        primary_title: o.primary_title ?? {},
        sort_name: o.sort_name ?? '',
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual 1.0
 */
export interface WorkVariant extends MovingImageRecord {
    /** Form describes the format and/or purpose of a Work, e.g., “non-fiction”, “short” and “animation”. See also the FIAF Moving Image Cataloguing Manual 1.4.3 and the FIAF Glossary of Filmographic Terms D.1 */
    has_form?: string,
    /** Genre describes categories of Works, characterized by similar plots, themes, settings, situations, and characters. Examples of genres are “westerns” and “thrillers”. See also the FIAF Moving Image Cataloguing Manual 1.4.3 and the FIAF Glossary of Filmographic Terms D.2.1 */
    has_genre?: Genre[],
    /** Subject descriptor terms for the content of a film specifying its period, themes, locations, etc. Not to be confused with Genre. See also the FIAF Moving Image Cataloguing Manual 1.4.3 and the FIAF Glossary of Filmographic Terms D.2.3 */
    has_related_term?: SubjectHeading[],
    has_work_variant?: AVefiResource[],
    same_as?: AuthorityResource[],
    type?: string,
    variant_type?: string,
}


export function isWorkVariant(o: object): o is WorkVariant {
    return (
        'id' in o &&
        'primary_title' in o &&
        'category' in o
    )
}

export function toWorkVariant(o: WorkVariant): WorkVariant {
    return {
        has_form: o.has_form ?? undefined,
        has_genre: o.has_genre ?? [],
        has_related_term: o.has_related_term ?? [],
        has_work_variant: o.has_work_variant ?? [],
        same_as: o.same_as ?? [],
        type: o.type ?? undefined,
        variant_type: o.variant_type ?? '',
        has_event: o.has_event ?? [],
        id: o.id ?? null,
        alternative_title: o.alternative_title ?? [],
        primary_title: o.primary_title ?? {},
        sort_name: o.sort_name ?? '',
        category: o.category ?? null
    }
}

/**
 * Name of country, region or other location. Names should be taken from appropriate authorities (e.g. GND) and recorded as a human readable string in the name attribute and as linked data in the same_as attribute. See also FIAF Moving Image Cataloguing Manual 1.3.3, D.4
 */
export interface GeographicName extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name: string,
    same_as?: AuthorityResource[],
}


export function isGeographicName(o: object): o is GeographicName {
    return (
        'name' in o &&
        'category' in o
    )
}

export function toGeographicName(o: GeographicName): GeographicName {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface Genre extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name?: string,
    same_as?: GNDResource[],
}


export function isGenre(o: object): o is Genre {
    return (
        'category' in o
    )
}

export function toGenre(o: Genre): Genre {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface SubjectHeading extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name?: string,
    same_as?: AuthorityResource[],
}


export function isSubjectHeading(o: object): o is SubjectHeading {
    return (
        'category' in o
    )
}

export function toSubjectHeading(o: SubjectHeading): SubjectHeading {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface Activity extends Entity {
    has_agent: Agent[],
    type?: string,
}


export function isActivity(o: object): o is Activity {
    return (
        'has_agent' in o &&
        'category' in o
    )
}

export function toActivity(o: Activity): Activity {
    return {
        has_agent: o.has_agent ?? [],
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}


export interface Agent extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name?: string,
    same_as?: AuthorityResource[],
}


export function isAgent(o: object): o is Agent {
    return (
        'category' in o
    )
}

export function toAgent(o: Agent): Agent {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface CorporateBody extends Agent {
}


export function isCorporateBody(o: object): o is CorporateBody {
    return (
        'category' in o
    )
}

export function toCorporateBody(o: CorporateBody): CorporateBody {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface Family extends Agent {
}


export function isFamily(o: object): o is Family {
    return (
        'category' in o
    )
}

export function toFamily(o: Family): Family {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface Person extends Agent {
    family_name?: string,
    given_name?: string,
}


export function isPerson(o: object): o is Person {
    return (
        'category' in o
    )
}

export function toPerson(o: Person): Person {
    return {
        family_name: o.family_name ?? '',
        given_name: o.given_name ?? '',
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}


export interface PersonGroup extends Agent {
}


export function isPersonGroup(o: object): o is PersonGroup {
    return (
        'category' in o
    )
}

export function toPersonGroup(o: PersonGroup): PersonGroup {
    return {
        alternate_name: o.alternate_name ?? [],
        name: o.name ?? '',
        same_as: o.same_as ?? [],
        category: o.category ?? null
    }
}

/**
 * Significant event in the lifecycle of moving image work / variant, manifestation or item. Always specify the type of event and if possible a date via has_end_date or a period of time via has_start_date and has_end_date. Specify located_in as appropriate, e.g. the country where the principal offices or production facilities of the production company are located for a production event. Involved parties in various roles can be linked via has_activity. See also FIAF Moving Image Cataloguing Manual 1.4.2, 2.4.2, 3.3.2
 */
export interface Event extends Entity {
    has_activity?: Activity[],
    /** Date marking the point in time when an event ends. Also, use this attribute when an event is to be recorded with a single date rather than spanning a period of time; leave has_start_date unassigned in this case. Dates must be recorded according to ISO 8601, e.g. 2024-04-24 or 2024-04 or just 2024 */
    has_end_date?: string,
    /** Date marking the point in time when an event starts. Only use this attribute when has_end_date is going to be assigned a different value, i.e. the event actually spans a period of time rather than occurring at a one point in time. Dates must be recorded according to ISO 8601, e.g. 2024-04-24 or 2024-04 or just 2024 */
    has_start_date?: string,
    located_in?: GeographicName[],
    type: string,
}


export function isEvent(o: object): o is Event {
    return (
        'type' in o &&
        'category' in o
    )
}

export function toEvent(o: Event): Event {
    return {
        has_activity: o.has_activity ?? [],
        has_end_date: o.has_end_date ?? '',
        has_start_date: o.has_start_date ?? '',
        located_in: o.located_in ?? [],
        type: o.type ?? null,
        category: o.category ?? null
    }
}


export interface Title extends Entity {
    /** FIAF Moving Image Cataloguing Manual A.2 */
    type: string,
    /** FIAF Moving Image Cataloguing Manual 1.3.2, 2.3.2, 3.1.2 */
    value: string,
}


export function isTitle(o: object): o is Title {
    return (
        'type' in o &&
        'value' in o &&
        'category' in o
    )
}

export function toTitle(o: Title): Title {
    return {
        type: o.type ?? null,
        value: o.value ?? '',
        category: o.category ?? null
    }
}


export interface ManifestationOrItem extends MovingImageRecord {
    has_format?: Format[],
}


export function isManifestationOrItem(o: object): o is ManifestationOrItem {
    return (
        'id' in o &&
        'primary_title' in o &&
        'category' in o
    )
}

export function toManifestationOrItem(o: ManifestationOrItem): ManifestationOrItem {
    return {
        has_format: o.has_format ?? [],
        has_event: o.has_event ?? [],
        id: o.id ?? null,
        alternative_title: o.alternative_title ?? [],
        primary_title: o.primary_title ?? {},
        sort_name: o.sort_name ?? '',
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual 2.3.4.1, 3.1.5.1
 */
export interface Format extends Entity {
    type?: string,
}


export function isFormat(o: object): o is Format {
    return (
        'category' in o
    )
}

export function toFormat(o: Format): Format {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Audio extends Format {
}


export function isAudio(o: object): o is Audio {
    return (
        'category' in o
    )
}

export function toAudio(o: Audio): Audio {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface DigitalFile extends Format {
}


export function isDigitalFile(o: object): o is DigitalFile {
    return (
        'category' in o
    )
}

export function toDigitalFile(o: DigitalFile): DigitalFile {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface DigitalFileEncoding extends Format {
}


export function isDigitalFileEncoding(o: object): o is DigitalFileEncoding {
    return (
        'category' in o
    )
}

export function toDigitalFileEncoding(o: DigitalFileEncoding): DigitalFileEncoding {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Film extends Format {
}


export function isFilm(o: object): o is Film {
    return (
        'category' in o
    )
}

export function toFilm(o: Film): Film {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Optical extends Format {
}


export function isOptical(o: object): o is Optical {
    return (
        'category' in o
    )
}

export function toOptical(o: Optical): Optical {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Video extends Format {
}


export function isVideo(o: object): o is Video {
    return (
        'category' in o
    )
}

export function toVideo(o: Video): Video {
    return {
        type: o.type ?? undefined,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual 2.0
 */
export interface Manifestation extends ManifestationOrItem {
    /** Indicate AVefi Items the institution has registered as part of the manifestation */
    has_item?: AVefiResource[],
    /** Indicate AVefi WorkVariant (possibly more but no less than one) that is subject of the manifestation */
    is_manifestation_of: AVefiResource[],
    language?: Language[],
    production_year?: string,
    release_date?: string,
    /** Link to AVefi resource registered by another data provider indicating that the two manifestations are known to be the same. Use this, for instance, when you have cooperated in making a digital restoration of some film work */
    same_as?: AVefiResource[],
    type?: string,
}


export function isManifestation(o: object): o is Manifestation {
    return (
        'is_manifestation_of' in o &&
        'id' in o &&
        'primary_title' in o &&
        'category' in o
    )
}

export function toManifestation(o: Manifestation): Manifestation {
    return {
        has_item: o.has_item ?? [],
        is_manifestation_of: o.is_manifestation_of ?? [],
        language: o.language ?? [],
        production_year: o.production_year ?? '',
        release_date: o.release_date ?? '',
        same_as: o.same_as ?? [],
        type: o.type ?? undefined,
        has_format: o.has_format ?? [],
        has_event: o.has_event ?? [],
        id: o.id ?? null,
        alternative_title: o.alternative_title ?? [],
        primary_title: o.primary_title ?? {},
        sort_name: o.sort_name ?? '',
        category: o.category ?? null
    }
}


export interface Language extends Entity {
    /** ISO 639-2 code for the Representation of Names of Languages (Part 2: Alpha-3) */
    code: string,
    usage: string,
}


export function isLanguage(o: object): o is Language {
    return (
        'code' in o &&
        'usage' in o &&
        'category' in o
    )
}

export function toLanguage(o: Language): Language {
    return {
        code: o.code ?? '',
        usage: o.usage ?? null,
        category: o.category ?? null
    }
}

/**
 * FIAF Moving Image Cataloguing Manual 3.0
 */
export interface Item extends ManifestationOrItem {
    access_status?: string,
    /** Indicate AVefi Manifestation the item belongs to. Every item must be associated with a manifestation from the same data provider */
    is_item_of: AVefiResourceId,
    has_holding_institution?: string,
    /** Link to AVefi item registered by another institution indicating that the two are known to be copies of each other */
    is_copy_of?: AVefiResource[],
    /** Link to AVefi item from which this one has been derived in whole or in part, e.g. as a result of a restoration or digitasation project */
    is_derivative_of?: AVefiResource[],
    element_type?: string,
}


export function isItem(o: object): o is Item {
    return (
        'is_item_of' in o &&
        'id' in o &&
        'primary_title' in o &&
        'category' in o
    )
}

export function toItem(o: Item): Item {
    return {
        access_status: o.access_status ?? undefined,
        is_item_of: o.is_item_of ?? null,
        has_holding_institution: o.has_holding_institution ?? '',
        is_copy_of: o.is_copy_of ?? [],
        is_derivative_of: o.is_derivative_of ?? [],
        element_type: o.element_type ?? undefined,
        has_format: o.has_format ?? [],
        has_event: o.has_event ?? [],
        id: o.id ?? null,
        alternative_title: o.alternative_title ?? [],
        primary_title: o.primary_title ?? {},
        sort_name: o.sort_name ?? '',
        category: o.category ?? null
    };
}

/**
 * A holder for MovingImageRecord objects
 */
export interface MovingImageRecordCollection extends Entity {
    has_record?: MovingImageRecord[],
}


export function isMovingImageRecordCollection(o: object): o is MovingImageRecordCollection {
    return (
        'category' in o
    )
}

export function toMovingImageRecordCollection(o: MovingImageRecordCollection): MovingImageRecordCollection {
    return {
        has_record: o.has_record ?? [],
        category: o.category ?? null
    }
}

/**
 * Root class for all identifiers from some kind of authority or public register widely accepted in the community
 */
export interface AuthorityResource extends Entity {
    /** A unique identifier for a thing */
    id: string,
}


export function isAuthorityResource(o: object): o is AuthorityResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toAuthorityResource(o: AuthorityResource): AuthorityResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * Digital Object Identifier maintained by the DOI Foundation and commonly used for scientific publications including films.
 */
export interface DOIResource extends AuthorityResource {
}


export function isDOIResource(o: object): o is DOIResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toDOIResource(o: DOIResource): DOIResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * Handle with the prefix allocated for AVefi (eventually)
 */
export interface AVefiResource extends AuthorityResource {
}


export function isAVefiResource(o: object): o is AVefiResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toAVefiResource(o: AVefiResource): AVefiResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * Identifier of the German Filmportal.de
 */
export interface FilmportalResource extends AuthorityResource {
}


export function isFilmportalResource(o: object): o is FilmportalResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toFilmportalResource(o: FilmportalResource): FilmportalResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * Gemeinsame Normdatei (GND) identifier maintained by Deutsche Nationalbibliothek (German National Library)
 */
export interface GNDResource extends AuthorityResource {
}


export function isGNDResource(o: object): o is GNDResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toGNDResource(o: GNDResource): GNDResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * International Standard Identifier for Libraries and Related Organizations including (film) archives.
 */
export interface ISILResource extends AuthorityResource {
}


export function isISILResource(o: object): o is ISILResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toISILResource(o: ISILResource): ISILResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * Virtual International Authority File identifier hosted by OCLC. The data is accumulated from various well established authority files from different parts of teh world.
 */
export interface VIAFResource extends AuthorityResource {
}


export function isVIAFResource(o: object): o is VIAFResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toVIAFResource(o: VIAFResource): VIAFResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}

/**
 * Identifier for Wikidata entities
 */
export interface WikidataResource extends AuthorityResource {
}


export function isWikidataResource(o: object): o is WikidataResource {
    return (
        'id' in o &&
        'category' in o
    )
}

export function toWikidataResource(o: WikidataResource): WikidataResource {
    return {
        id: o.id ?? '',
        category: o.category ?? null
    }
}


