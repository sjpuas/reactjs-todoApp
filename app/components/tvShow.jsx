/**
 * @jsx React.DOM
 */
var ShowsRow  = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <a href={"http://www.imdb.com/title/"+this.props.imbd}>{this.props.titleMovie}</a>
        </td>
        <td>
          <img src={this.props.img}/>
        </td>
        <td>
          <a href={this.props.torrent}>link</a>
        </td>
      </tr>
    );
  }
});
