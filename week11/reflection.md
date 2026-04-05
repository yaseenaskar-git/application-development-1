# Week 11 Reflection

## What is a session?

A session is a temporary connection between a user and a network or software.

## What does the server store?

The server stores information related to the network/service and its users, including session data such as user email.

## What does the client store?

The client stores personalized data that the service or network retrieves from the client whenever needed. This includes a session ID which is sent to the server with every request for the server to identify the user.

## Why does /profile fail before login?

Because an authorized connection has not yet been made with the server and a session has not started.

## Why does /profile work after login?

Because an authorized connection has been made with the server and a session has started.

## Why does profile fail again after logout?

Because the previously made connection/session has ended and authentication is required for another login.

