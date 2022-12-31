/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
export default function BreadCrumb({ list }) {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {
                        list?.map?.((item, index) => {
                            const arias = index === list?.length ? { "aria-label": "current-page" } : {}
                            return (
                                <li key={item.url}>
                                    <NavLink {...arias} to={item.url}>{item.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

BreadCrumb.propTypes = {
    list: propTypes.array.isRequired
}