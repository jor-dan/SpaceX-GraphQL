import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    capsule(capsule_serial: String!): Capsule
    capsules(range: CapsuleRange, limit: Int, offset: Int, order: Order, sort: String): [Capsule]
    core(core_serial: String!): Core
    cores(limit: Int, offset: Int, order: Order, sort: String): [Core]
    dragon(id: String!): Dragon
    dragons(limit: Int, offset: Int): [Dragon]
    history(limit: Int, offset: Int, order: Order, sort: String, id: String): [History]
    info: Info
    landingpad(id: String): Landingpad
    landingpads(limit: Int, offset: Int): [Landingpad]
    launch(id: String): Launch
    launches(
      range: LaunchRange, limit: Int, offset: Int, order: Order, sort: String, ids: [String]
      ): [Launch]
    launchpad(id: String!): Launchpad
    launchpads(limit: Int, offset: Int): [Launchpad]
    mission(id: String!): Mission
    missions(limit: Int, offset: Int): [Mission]
    payload(id: String!): Payload
    payloads(limit: Int, offset: Int, order: Order, sort: String): [Payload]
    roadster: Roadster
    rocket(id: String!): Rocket
    rockets(limit: Int, offset: Int): [Rocket]
    ship(id: String!): Ship
    ships(limit: Int, offset: Int, order: Order, sort: String): [Ship]
  }

  enum CapsuleRange {
    past
    upcoming
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

  type BasicMission {
    name: String
    flight: Int
  }

  type Capsule {
    capsule_serial: String
    capsule_id: String
    status: String
    original_launch: String
    original_launch_unix: Float
    missions: [BasicMission]
    landings: Int
    type: String
    details: String
    reuse_count: Int
  }

  type Core {
    core_serial: String
    block: Int
    status: String
    original_launch: String
    original_launch_unix: Float
    missions: [BasicMission]
    reuse_count: Int
    rtls_attempts: Int
    rtls_landings: Int
    asds_attempts: Int
    asds_landings: Int
    water_landing: Boolean
    details: String
  }

  type Dimension {
    meters: Float
    feet: Float
  }

  type Dragon {
    id: String
    name: String
    type: String
    active: Boolean
    crew_capacity: Int
    sidewall_angle_deg: Int
    orbit_duration_yr: Int
    dry_mass_kg: Int
    dry_mass_lb: Int
    first_flight: String
    heat_shield: HeatShield
    thrusters: [Thruster]
    launch_payload_mass: Mass
    launch_payload_vol: PayloadVolume
    return_payload_mass: Mass
    return_payload_vol: PayloadVolume
    pressurized_capsule: PressurizedCapsule
    trunk: Trunk
    height_w_trunk: Dimension
    diameter: Dimension
    wikipedia: String
    description: String
  }

  type Engines {
    number: Int
    type: String
    version: String
    engine_loss_max: Int
    propellant_1: String
    propellant_2: String
    thrust_sea_level: Thrust
    thrust_vacuum: Thrust
    thrust_to_weight: Float
  }

  type Fairing {
    height: Dimension
    diameter: Dimension
  }

  type Headquarters {
    address: String
    city: String
    state: String
  }

  type HeatShield {
    material: String
    size_meters: Float
    temp_degrees: Int
    dev_partner: String
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

  type LandingLegs {
    number: Int
    material: String
  }

  type Landingpad {
    id: String
    full_name: String
    status: String
    location: Location
    landing_type: String
    attempted_landings: Int
    successful_landings: Int
    wikipedia: String
    details: String
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

  type Launchpad {
    id: Int
    status: String
    location: Location
    vehicles_launched: [String]
    attempted_launches: Int
    successful_launches: Int
    wikipedia: String
    details: String
    site_id: String
    site_name_long: String
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
    cores: [LaunchRocketFirstStageCore]
  }

  type LaunchRocketFirstStageCore {
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
    first_stage_landing_burn: Int
    first_stage_landing: Int
    second_stage_restart: Int
    seco_2: Int
    payload_deploy: Int
    dragon_separation: Int
  }

  type Location {
    name: String
    region: String
    latitude: Float
    longitude: Float
  }

  type Mass {
    kg: Int
    lb: Int
  }

  type Mission {
    mission_name: String
    mission_id: String
    manufacturers: [String]
    payload_ids: [String]
    wikipedia: String
    website: String
    twitter: String
    description: String
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
    longitude: Float
    semi_major_axis_km: Float
    eccentricity: Float
    periapsis_km: Float
    apoapsis_km: Float
    inclination_deg: Float
    period_min: Float
    lifespan_years: Float
    epoch: String
    mean_motion: Float
    raan: Float
    arg_of_pericenter: Float
    mean_anomaly: Float
  }

  type PayloadVolume {
    cubic_meters: Int
    cubic_feet: Int
  }

  type Position {
    latitude: Float
    longitude: Float
  }

  type PressurizedCapsule {
    payload_volume: PayloadVolume
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

  type Rocket {
    id: Int
    active: Boolean
    stages: Int
    boosters: Int
    cost_per_launch: Int
    success_rate_pct: Float
    first_flight: String
    country: String
    company: String
    height: Dimension
    mass: Mass
    payload_weights: [RocketPayloadWeight]
    first_stage: RocketFirstStage
    second_stage: RocketSecondStage
    engines: Engines
    landing_legs: LandingLegs
    flickr_images: [String]
    wikipedia: String
    description: String
    rocket_id: String
    rocket_name: String
    rocket_type: String
  }

  type RocketFirstStage {
    reusable: Boolean
    engines: Int
    fuel_amount_tons: Float
    burn_time_sec: Int
    thrust_sea_level: Thrust
    thrust_vacuum: Thrust
  }

  type RocketPayload {
    option_1: String
    option_2: String
    composite_fairing: Fairing
  }

  type RocketPayloadWeight {
    id: String
    name: String
    kg: Float
    lb: Float
  }

  type RocketSecondStage {
    engines: Int
    fuel_amount_tons: Float
    burn_time_sec: Int
    thrust: Thrust
    payloads: RocketPayload
  }

  type Ship {
    ship_id: String
    ship_name: String
    ship_model: String
    ship_type: String
    roles: [String]
    active: Boolean
    imo: Int
    mmsi: Int
    abs: Int
    class: Int
    weight_lbs: Float
    weight_kg: Float
    year_built: Int
    home_port: String
    status: String
    speed_kn: Float
    course_deg: Float
    position: Position
    successful_landings: Int
    attempted_landings: Int
    missions: [BasicMission]
    url: String
    image: String
  }

  type Thrust {
    kN: Float
    lbf: Float
  }

  type Thruster {
    type: String
    amount: Int
    pods: Int
    fuel_1: String
    fuel_2: String
    thrust: Thrust
  }

  type Trunk {
    trunk_volume: PayloadVolume
    cargo: TrunkCargo
  }

  type TrunkCargo {
    solar_array: Int
    unpressurized_cargo: Boolean
  }
`;

export default typeDefs;
