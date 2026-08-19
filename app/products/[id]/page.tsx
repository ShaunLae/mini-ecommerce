"use client";
import { useParams } from "next/navigation";
import React from "react";

function DynamicRoute() {
    const { id } = useParams();
    return <div>DynamicRoute {id}</div>
}

export default DynamicRoute;