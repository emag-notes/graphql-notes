import gql from "graphql-tag";
import * as React from 'react';
import { graphql, Query } from "react-apollo";
import Link from './Link'
import { ILink } from "../model/Link";

interface IProps {
  feedQuery: {
    loading: boolean;
    error: boolean;
    feed: {
      links: ILink[]
    }
  }
}

class LinkList extends React.Component<IProps> {
  public render() {
    const {feedQuery} = this.props;

    if (feedQuery.loading) {
      return <div>Loading</div>
    }

    if (feedQuery.error) {
      return <div>Error</div>
    }

    const linksToRender = feedQuery.feed.links;

    return (
      <div>{linksToRender.map(link => <Link key={link.id} link={link}/>)}</div>
    )
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

interface IData {
  feed: {
    links: Array<{
      id: string;
      createdAt: string;
      url: string;
      description: string;
    }>
  };
}

class FeedQuery extends Query<IData, {}> {}

type Response = {
  links: ILink[]
}

export default graphql<{}, Response, {}>(FEED_QUERY, {
  name: 'feedQuery'
})(LinkList);
