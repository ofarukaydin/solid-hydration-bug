import { StartServer, createHandler } from "solid-start/entry-server";
import { renderStream } from "solid-start/server/render";

export default createHandler(
  ({ forward }) => {
    return async event => {
      return forward(event);
    };
  },
  renderStream(event => <StartServer event={event} />)
);
