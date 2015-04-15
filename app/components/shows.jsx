/**
 * @jsx React.DOM
 */
var Shows = React.createClass({
  render: function() {
    var movieNodes = this.props.data.map(function (movie) {
     return (
       <ShowsRow movieId={movie.id}
                 titleMovie={movie.title_long}
                 imbd={movie.imdb_code}
                 img={movie.small_cover_image}
                 torrent={movie.torrents[0].url} />
     );
   });
   return (
     <table className="table table-hover">
       <thead>
         <tr>
            <th>Nombre Pelicula</th>
            <th>Imagen</th>
            <th>Torrent</th>
         </tr>
       </thead>
       <tbody>
         {movieNodes}
       </tbody>
     </table>
   );
  }
});
