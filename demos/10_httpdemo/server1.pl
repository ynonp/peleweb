#!/usr/bin/env perl
use Mojolicious::Lite;

hook(before_dispatch => sub {
		my $c = shift;
		$c->res->headers->header( 'Access-Control-Allow-Origin' => '*' );
});


# Ruby: Sinatra
# JavaScrpipt: Express

my @flights = (
  { id => 1, captain => 'Jack', crew => 7  },
  { id => 2, captain => 'Jane', crew => 10 },
);

get '/flights' => sub {
  my $c = shift;
  $c->render(json => \@flights);
};



app->start;
