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
/**
* FIAF Moving Image Cataloguing Manual 1.4.1
*/
export enum AgentTypeEnum {

    CorporateBody = "CorporateBody",
    Family = "Family",
    Person = "Person",
    PersonGroup = "PersonGroup",
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
/**
* Qualifier indicating the precision of an extent value or duration
*/
export enum PrecisionEnum {

    /** Value may be inaccurate but is regarded to be close to the real thing */
    Approximate = "Approximate",
    /** Sources for the given value are deemed unreliable, so it may as well be off the mark */
    Uncertain = "Uncertain",
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
/**
* FIAF Moving Image Cataloguing Manual D.2
*/
export enum VariantTypeEnum {

    /** FIAF Moving Image Cataloguing Manual D.2 */
    AbridgedCondensed = "AbridgedCondensed",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    Augmented = "Augmented",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    BlackAndWhiteCopyOfWorkOriginallyIssuedInColour = "BlackAndWhiteCopyOfWorkOriginallyIssuedInColour",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    Censored = "Censored",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    Colourized = "Colourized",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    DifferentSoundTrack = "DifferentSoundTrack",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    Dubbed = "Dubbed",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    PreservationRestoration = "PreservationRestoration",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    Sonorized = "Sonorized",
    /** FIAF Moving Image Cataloguing Manual D.2 */
    Subtitled = "Subtitled",
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



export interface MovingImageRecord extends Entity {
    has_event?: Event[],
    /** A unique identifier for a thing */
    id: string,
    /** FIAF Moving Image Cataloguing Manual 1.3.5, 2.3.3 */
    in_language?: Language[],
    /** Additional title(s) associated with the work / variant, manifestation, or item. */
    alternative_title?: Title[],
    /** Primary title to be displayed in search results etc. The type should be PreferredTitle for works / variants and TitleProper for manifestations / items. If not available, type must be SuppliedDevisedTitle, instead. */
    primary_title: Title,
    /** Altered value of primary_title if required for proper sorting in search result lists. Leave empty if not required. */
    sort_name?: string,
}


/**
 * FIAF Moving Image Cataloguing Manual 1.0
 */
export interface WorkVariant extends MovingImageRecord {
    /** Form describes the format and/or purpose of a Work, e.g., “non-fiction”, “short” and “animation”. See also: FIAF Moving Image Cataloguing Manual 1.4.3 and FIAF Glossary of Filmographic Terms D.1 */
    has_form?: string,
    /** Genre describes categories of Works, characterized by similar plots, themes, settings, situations, and characters. Examples of genres are “westerns” and “thrillers”. See also: FIAF Moving Image Cataloguing Manual 1.4.3 and FIAF Glossary of Filmographic Terms D.2.1 */
    has_genre?: Genre[],
    /** Subject descriptor terms for the content of a film specifying its period, themes, locations, etc. Not to be confused with Genre. See also: FIAF Moving Image Cataloguing Manual 1.4.3 and FIAF Glossary of Filmographic Terms D.2.3 */
    has_related_term?: SubjectHeading[],
    /** Relate, for instance, episodes to a series / serial. See also: FIAF Moving Image Cataloguing Manual D.17 */
    is_part_of?: AVefiResource[],
    /** Link to the reference WorkVariant for the currently described variant. See also: FIAF Moving Image Cataloguing Manual 1.0.2, 1.1.2, 1.4.5 */
    is_variant_of?: AVefiResourceId,
    same_as?: AuthorityResource[],
    type?: string,
    /** FIAF Moving Image Cataloguing Manual D.2 */
    variant_type?: string,
}


/**
 * Name of country, region or other location. Names should be taken from appropriate authorities (e.g. GND) and recorded as a human readable string in the name attribute and as linked data in the same_as attribute. See also: FIAF Moving Image Cataloguing Manual 1.3.3, D.4
 */
export interface GeographicName extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name: string,
    same_as?: AuthorityResource[],
}



export interface Genre extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name: string,
    same_as?: GNDResource[],
}



export interface SubjectHeading extends Entity {
    alternate_name?: string[],
    /** A human-readable name for a thing */
    name: string,
    same_as?: AuthorityResource[],
}



export interface Activity extends Entity {
    /** Agent involved in some activity related to the moving image resource */
    has_agent: Agent[],
    type?: string,
}


/**
 * Agent involved in some activity related to the moving image resource. For agents of type "Person" specify name according to the convention "family name, given name"
 */
export interface Agent extends Entity {
    alternate_name?: string[],
    /** For natural persons, always use the convention "family name, given name" */
    name: string,
    same_as?: AuthorityResource[],
    type: string,
}


/**
 * Significant event in the lifecycle of moving image work / variant, manifestation or item. Always specify the type of event and if possible a date via has_end_date or a period of time via has_start_date and has_end_date. Specify located_in as appropriate, e.g. the country where the principal offices or production facilities of the production company are located for a production event. Involved parties in various roles can be linked via has_activity. See also: FIAF Moving Image Cataloguing Manual 1.4.2, 2.4.2, 3.3.2
 */
export interface Event extends Entity {
    has_activity?: Activity[],
    /** Date (or interval/period) when an event has taken place. A subset of ISO 8601 is supported, more specifically, EDTF conformance level 0 as well as qualifiers ? (uncertain date) and ~ (approximate date). See examples and references for more information */
    has_date?: string,
    located_in?: GeographicName[],
    type: string,
}



export interface Title extends Entity {
    /** FIAF Moving Image Cataloguing Manual A.2 */
    type: string,
    /** FIAF Moving Image Cataloguing Manual 1.3.2, 2.3.2, 3.1.2 */
    value: string,
}



export interface ManifestationOrItem extends MovingImageRecord {
    /** Total running time of the described object in ISO 8601 duration format. See also: FIAF Moving Image Cataloguing Manual 2.3.5.3, 3.1.5.11 */
    has_duration?: Duration,
    has_format?: Format[],
}


/**
 * Total running time of the described object in ISO 8601 duration format. The examples section lists possible values for the has_value slot. See also: FIAF Moving Image Cataloguing Manual 2.3.5.3, 3.1.5.11
 */
export interface Duration extends Entity {
    /** Value of some quantity */
    has_value?: string,
    /** Qualifier indicating the precision of an extent value or duration */
    value_is?: string,
}


/**
 * FIAF Moving Image Cataloguing Manual 2.3.4.1, 3.1.5.1
 */
export interface Format extends Entity {
    type?: string,
}


/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Audio extends Format {
}


/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface DigitalFile extends Format {
}


/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface DigitalFileEncoding extends Format {
}


/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Film extends Format {
}


/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Optical extends Format {
}


/**
 * FIAF Moving Image Cataloguing Manual D.7.2
 */
export interface Video extends Format {
}


/**
 * FIAF Moving Image Cataloguing Manual 2.0
 */
export interface Manifestation extends ManifestationOrItem {
    /** Indicate AVefi Items the institution has registered as part of the manifestation */
    has_item?: AVefiResource[],
    /** Indicate AVefi WorkVariant (possibly more but no less than one) that is subject of the manifestation */
    is_manifestation_of: AVefiResource[],
    /** Link to AVefi resource registered by another data provider indicating that the two manifestations are known to be the same. Use this, for instance, when you have cooperated in making a digital restoration of some film work */
    same_as?: AVefiResource[],
    type?: string,
}



export interface Language extends Entity {
    /** ISO 639-2 code for the Representation of Names of Languages (Part 2: Alpha-3) */
    code: string,
    usage: string,
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


/**
 * A holder for MovingImageRecord objects
 */
export interface MovingImageRecordCollection extends Entity {
    has_record?: MovingImageRecord[],
}


/**
 * Root class for all identifiers from some kind of authority or public register widely accepted in the community
 */
export interface AuthorityResource extends Entity {
    /** A unique identifier for a thing */
    id: string,
}


/**
 * Digital Object Identifier maintained by the DOI Foundation and commonly used for scientific publications including films.
 */
export interface DOIResource extends AuthorityResource {
}


/**
 * Handle with the prefix allocated for AVefi (eventually)
 */
export interface AVefiResource extends AuthorityResource {
}


/**
 * Identifier of the German Filmportal.de
 */
export interface FilmportalResource extends AuthorityResource {
}


/**
 * Gemeinsame Normdatei (GND) identifier maintained by Deutsche Nationalbibliothek (German National Library)
 */
export interface GNDResource extends AuthorityResource {
}


/**
 * International Standard Identifier for Libraries and Related Organizations including (film) archives.
 */
export interface ISILResource extends AuthorityResource {
}


/**
 * Virtual International Authority File identifier hosted by OCLC. The data is accumulated from various well established authority files from different parts of teh world.
 */
export interface VIAFResource extends AuthorityResource {
}


/**
 * Identifier for Wikidata entities
 */
export interface WikidataResource extends AuthorityResource {
}


