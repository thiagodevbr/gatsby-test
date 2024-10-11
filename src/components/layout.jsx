import React from "react";
import * as S from './layout.module.css'

export default function Layout({title, children}) {
  return (
    <>
    <h1 className={S.title}>{title}</h1>
    {children}
    </>
  )
}