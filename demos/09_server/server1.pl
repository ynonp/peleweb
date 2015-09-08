#!/usr/bin/env perl
use Mojolicious::Lite;

hook(before_dispatch => sub {
		my $c = shift;
		$c->res->headers->header( 'Access-Control-Allow-Origin' => '*' );
});

get '/' => sub {
  my $c = shift;
  $c->render(json => { name => 'ynon' });
};

app->start;
