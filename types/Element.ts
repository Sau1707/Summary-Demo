import React from "react";

export type Element = {
    id: string,
    height?: number,
    color?: string,
    number?: number
}

export interface ElementData  {
    dialog: React.FC;
    element: React.FC;
    default: object
}

export interface ElementSettings {
    [key: string]: ElementData
}