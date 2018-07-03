import * as React from 'react';
import { ILink } from "../model/Link";

interface IProps {
  link: ILink;
}

class Link extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }

  // _voteForLink = async () => {
  //
  // }

}

export default Link;
