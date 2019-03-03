<div align="center">
<img src="https://farm5.staticflickr.com/4711/40126461411_b1ed283d45_o.jpg"/>
</div>
<h1 align="center">SpaceX GraphQL</h1>
<h3 align="center">
    A GraphQL wrapper over the
    <a href="https://github.com/r-spacex/SpaceX-API">SpaceX REST API</a>
</h3>

## Usage

URL: `https://spacexdata.herokuapp.com`

Endpoint: `/graphql`

### Queries

| Query    | Description                                 | Parameters                                                                           |
| :------- | :------------------------------------------ | :----------------------------------------------------------------------------------- |
| History  | SpaceX historical event(s)                  | `id: String`                                                                         |
| Info     | SpaceX company information                  |                                                                                      |
| Launch   | Info from an individual launch              | `id: String`                                                                         |
| Launches | Info from multiple launches                 | `range: latest/next/past/upcoming`, `order: String`, `sort: String`, `ids: [String]` |
| Roadster | Info from Roadster launched on Falcon Heavy |                                                                                      |

#### Parameters

| Parameter | Description                                      |
| :-------- | :----------------------------------------------- |
| id        | ID of item being requested. (e.g. flight number) |
| ids       | Array of IDs                                     |
| order     | Set order of results (`asc` or `desc`)           |
| sort      | Sort results by any value in the response        |