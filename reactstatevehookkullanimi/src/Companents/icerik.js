import React, { useContext } from 'react'
import {RenkModu} from '../App'
export default function Icerik() {
  return (
    <div style={useContext(RenkModu)}>
        <h1>React Context İle Veri Aktarımı</h1>
        <h2>useContext ile companentler arası veri taşıma</h2>
        <p> Lorem İpsum dolor sit amet </p>
        <p> Lorem İpsum dolor sit amet </p>
        <p> Lorem İpsum dolor sit amet </p>
        <p> Lorem İpsum dolor sit amet </p>
        <p> Lorem İpsum dolor sit amet </p>
        <p> Lorem İpsum dolor sit amet </p>
    </div>
  )
}
