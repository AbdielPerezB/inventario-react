import React from "react";

export const SearchComponent = () => {
    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            <button type="button" class="btn btn-primary">Buscar</button>
        </form>
    )
}