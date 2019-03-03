import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    history(order: Order, sort: String, id: String): [History]
    info: Info
    launch(id: String): Launch
    launches(range: LaunchRange, order: Order, sort: String, ids: [String]): [Launch]
    roadster: Roadster
  }

  enum LaunchRange {
    latest
    next
    past
    upcoming
  }

  enum Order {
    asc
    desc
  }

  type Headquarters {
    address: String
    city: String
    state: String
  }

  type History {
    id: Int
    title: String
    event_date_utc: String
    event_date_unix: Float
    flight_number: Int
    details: String
    links: HistoryLinks
  }

  type HistoryLinks {
    article: String
    reddit: String
    wikipedia: String
  }

  type Info {
    name: String
    founder: String
    founded: Int
    employees: Int
    vehicles: Int
    launch_sites: Int
    test_sites: Int
    ceo: String
    cto: String
    coo: String
    cto_propulsion: String
    valuation: Float
    headquarters: Headquarters
    summary: String
  }

  type Launch {
    flight_number: Int
    mission_id: [String]
    mission_name: String
    launch_year: Int
    launch_date_unix: Float
    launch_date_utc: String
    launch_date_local: String
    is_tentative: Boolean
    tentative_max_precision: String
    tbd: Boolean
    launch_window: Int
    rocket: LaunchRocket
    ships: [String]
    telemetry: LaunchTelemetry
    launch_site: LaunchSite
    launch_success: Boolean
    links: LaunchLinks
    details: String
    upcoming: Boolean
    static_fire_date_utc: String
    static_fire_date_unix: Float
    timeline: LaunchTimeline
  }

  type LaunchLinks {
    mission_patch: String
    mission_patch_small: String
    reddit_campaign: String
    reddit_launch: String
    reddit_recovery: String
    reddit_media: String
    presskit: String
    article_link: String
    wikipedia: String
    video_link: String
    youtube_id: String
    flickr_images: [String]
  }

  type LaunchRocket {
    rocket_id: String
    rocket_name: String
    rocket_type: String
    first_stage: LaunchRocketFirstStage
    second_stage: LaunchRocketSecondStage
    fairings: LaunchRocketFairings
  }

  type LaunchRocketFairings {
    reused: Boolean
    recovery_attempt: Boolean
    recovered: Boolean
    ship: String
  }

  type LaunchRocketFirstStage {
    cores: [LaunchRocketFirstStageCores]
  }

  type LaunchRocketFirstStageCores {
    core_serial: String
    flight: Int
    block: Int
    gridfins: Boolean
    legs: Boolean
    reused: Boolean
    land_success: Boolean
    landing_intent: Boolean
    landing_type: String
    landing_vehicle: String
  }

  type LaunchRocketSecondStage {
    block: Int
    payloads: [Payload]
  }

  type LaunchSite {
    site_id: String
    site_name: String
    site_name_long: String
  }

  type LaunchTelemetry {
    flight_club: String
  }

  type LaunchTimeline {
    webcast_liftoff: Int
    go_for_prop_loading: Int
    rp1_loading: Int
    stage1_lox_loading: Int
    stage2_lox_loading: Int
    engine_chill: Int
    prelaunch_checks: Int
    propellant_pressurization: Int
    go_for_launch: Int
    ignition: Int
    liftoff: Int
    maxq: Int
    meco: Int
    stage_sep: Int
    second_stage_ignition: Int
    fairing_deploy: Int
    first_stage_entry_burn: Int
    seco_1: Int
    first_stage_landing: Int
    second_stage_restart: Int
    seco_2: Int
    payload_deploy: Int
  }

  type Payload {
    payload_id: String
    norad_id: [String]
    customers: [String]
    nationality: String
    manufacturer: String
    payload_type: String
    payload_mass_kg: Float
    payload_mass_lbs: Float
    orbit: String
    orbit_params: PayloadOrbitParams
  }

  type PayloadOrbitParams {
    reference_system: String
    regime: String
    longitude: Int
    semi_major_axis_km: Float
    eccentricity: Float
    periapsis_km: Float
    apoapsis_km: Float
    inclination_deg: Float
    period_min: Float
    lifespan_years: Int
    epoch: String
    mean_motion: Float
    raan: Float
    arg_of_pericenter: Float
    mean_anomaly: Float
  }

  type Roadster {
    name: String!
    launch_date_utc: String
    launch_date_unix: Float
    launch_mass_kg: Int
    launch_mass_lbs: Int
    norad_id: Int
    epoch_jd: Float
    orbit_type: String
    apoapsis_au: Float
    semi_major_axis_au: Float
    eccentricity: Float
    inclination: Float
    longitude: Float
    periapsis_arg: Float
    period_days: Float
    speed_kph: Float
    speed_mph: Float
    earth_distance_km: Float
    earth_distance_mi: Float
    mars_distance_km: Float
    mars_distance_mi: Float
    wikipedia: String
    details: String
  }
`;

export default typeDefs;
