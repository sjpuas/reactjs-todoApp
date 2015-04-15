var page = Math.floor(Math.random() * 197) + 1;

$.get('https://yts.to/api/v2/list_movies.json?page='+page,function(json){
  React.render(<Shows data={json.data.movies}/>, $('#app')[0]);
});
