#!/usr/bin/env perl
# Demo: Server with update
#
# Use GET to query
# Use PUT to update the record
#
use strict;
use warnings;
use v5.20;

use Mojolicious::Lite;

hook(before_dispatch => sub {
		my $c = shift;
		$c->res->headers->header( 'Access-Control-Allow-Origin' => '*' );
});

options '/' => sub {
  my $self = shift;

  $self->res->headers->header('Access-Control-Allow-Origin' => '*');
  $self->res->headers->header('Access-Control-Allow-Credentials' => 'true');
  $self->res->headers->header('Access-Control-Allow-Methods' => 'GET, OPTIONS, POST, DELETE, PUT');
  $self->res->headers->header('Access-Control-Allow-Headers' => 'Content-Type');
  $self->res->headers->header('Access-Control-Max-Age' => '1728000');

  $self->respond_to(any => { data => '', status => 200 });
};

my $details = { 
  name    => 'Bill',
  email   => 'bill@gmail.com',
  tagline => "You're Gonna Make Me Lonesome When You Go",
};

get '/' => sub {
  my $c = shift;
  $c->render(json => $details);
};

put '/' => sub {
  my $c = shift;
  my $params = $c->req->json;

  $details->{name}    = $params->{name}    if $params->{name};
  $details->{email}   = $params->{email}   if $params->{email};
  $details->{tagline} = $params->{tagline} if $params->{tagline};

  $c->render(json => $details);
};

app->start;
