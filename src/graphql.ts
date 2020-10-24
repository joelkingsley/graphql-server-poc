
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PatchSize {
    SMALL = "SMALL",
    LARGE = "LARGE"
}

export interface DadJoke {
    id?: string;
    joke?: string;
    status?: number;
}

export interface IQuery {
    dadJoke(): DadJoke | Promise<DadJoke>;
    launches(): Launch[] | Promise<Launch[]>;
    launch(id: string): Launch | Promise<Launch>;
}

export interface Launch {
    id: string;
    site?: string;
    mission?: Mission;
    rocket?: Rocket;
}

export interface Rocket {
    id: string;
    name?: string;
    type?: string;
}

export interface Mission {
    name?: string;
    missionPatch?: string;
}
