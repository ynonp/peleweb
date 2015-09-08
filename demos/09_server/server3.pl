#!/usr/bin/env perl
# Demo: REST API
#
# GET /
# returns all records
#
# POST /
# Add a new record
#
# GET /:id
# returns a specific record
#
# PUT /:id
# Modify existing record
#
# DELETE /:id
# Delete a record
#
use strict;
use warnings;
use v5.20;
use Scalar::Util qw/looks_like_number/;

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

my $next_id = 2;

my @items = (
  { 
    id      => 0,
    name    => 'Bill',
    email   => 'bill@gmail.com',
    tagline => "You're Gonna Make Me Lonesome When You Go",
  },
  {
    id      => 1,
    name    => 'Jane',
    email   => 'jane@gmail.com',
    tagline => "Now Jack he is a banker. And Jane she is a clerk",
  },
);

get '/' => sub {
  my $c = shift;
  $c->render(json => \@items);
};

post '/' => sub {
  my $c = shift;
  my $params = $c->req->json;

  my %item = %$params{qw/name email tagline/};
  $item{id} = $next_id++;
  
  push @items, \%item;
  $c->render(json => \%item);
};

del '/:id' => sub {
  my $c = shift;
  my $id = $c->param('id');
  die "Invalid id" if ! looks_like_number($id);
  my @items = grep { $_->{id} != $id } @items;
  $c->render(json => \@items);
};

get '/:id' => sub {
  my $c = shift;
  my $id = $c->param('id');
  my ($record) = grep { $_->{id} == $id } @items;
  $c->render(json => $record);
};


put '/:id' => sub {
  my $c = shift;
  my $params = $c->req->json;
  my $id = $c->param('id');

  my ($record) = grep { $_->{id} == $id } @items;

  $record->{name}    = $params->{name}    if $params->{name};
  $record->{email}   = $params->{email}   if $params->{email};
  $record->{tagline} = $params->{tagline} if $params->{tagline};

  $c->render(json => $record);
};

app->start;
