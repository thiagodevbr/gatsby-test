import React from 'react';

export default function Test(props) {
  console.log(props)
  return (
    <h2>{props.name}</h2>
  )
}