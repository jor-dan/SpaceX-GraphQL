<div align="center">
<img src="https://farm5.staticflickr.com/4711/40126461411_b1ed283d45_o.jpg"/>
</div>
<h1 align="center">SpaceX GraphQL</h1>
<h3 align="center">
    A GraphQL wrapper over the
    <a href="https://github.com/r-spacex/SpaceX-API">SpaceX REST API</a>
</h3>

## Usage

URL: [`https://spacexdata.herokuapp.com`](https://spacexdata.herokuapp.com)

Endpoint: `/graphql`

### Queries

Complete documentation about each query is available through the [SpaceX API Docs](https://docs.spacexdata.com).

| Query       | Parameters                                                                                                        |
| :---------- | :---------------------------------------------------------------------------------------------------------------- |
| Capsule     | `capsule_serial: String`                                                                                          |
| Capsules    | `range: past/upcoming`, `limit: Int`, `offset: Int`, `order: String`, `sort: String`                              |
| Core        | `core_serial: String`                                                                                             |
| Cores       | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Dragon      | `id: String`                                                                                                      |
| Dragons     | `limit: Int`, `offset: Int`                                                                                       |
| History     | `limit: Int`, `offset: Int`, `id: String`                                                                         |
| Info        |                                                                                                                   |
| Landingpad  | `id: String`                                                                                                      |
| Landingpads | `limit: Int`, `offset: Int`                                                                                       |
| Launch      | `id: String`                                                                                                      |
| Launches    | `range: latest/next/past/upcoming`, `limit: Int`, `offset: Int`, `order: String`, `sort: String`, `ids: [String]` |
| Launchpad   | `id: String`                                                                                                      |
| Launchpads  | `limit: Int`, `offset: Int`                                                                                       |
| Mission     | `id: String`                                                                                                      |
| Missions    | `limit: Int`, `offset: Int`                                                                                       |
| Payload     | `id: String`                                                                                                      |
| Payloads    | `limit: Int`, `offset: Int`, `order: String`, `sort: String`                                                      |
| Roadster    |                                                                                                                   |
| Rocket      | `id: String`                                                                                                      |
| Rockets     | `limit: Int`, `offset: Int`                                                                                       |

#### Parameters

| Parameter      | Description                                                      |
| :------------- | :--------------------------------------------------------------- |
| capsule_serial | Serial of capsule being requested (e.g. C112)                    |
| core_serial    | Serial of core being requested (e.g. B1046)                      |
| id             | ID of item being requested (flight number/payload or mission id) |
| ids            | Array of IDs                                                     |
| limit          | limit on the number of results returned                          |
| offset         | Offset or skip results from the beginning of the query           |
| order          | Set order of results (`asc` or `desc`)                           |
| sort           | Sort results by any value in the response                        |