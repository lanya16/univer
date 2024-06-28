/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { DataFrame, Series } from 'danfojs';

import type Groupby from 'danfojs/dist/danfojs-base/aggregators/groupby';

export declare type DTYPES = 'float32' | 'int32' | 'string' | 'boolean' | 'undefined';
export declare type ArrayType2D = Array<number[] | string[] | boolean[] | (number | string | boolean)[]>;
export declare type ArrayType1D = Array<number | string | boolean | (number | string | boolean)>;

export declare type ISeries = Series;
export declare type IGroupby = Groupby;

export declare type IDataFrame = DataFrame;

export interface IDataFrameOP {

    head(n: number): IDataFrame;

    tail(n: number): IDataFrame;

    shape(): IDataFrame;

    describe(): IDataFrame;

    max(): ISeries;

    min(): ISeries;

    mean(): ISeries;

    sum(): ISeries;

    count(): ISeries;

    std(): ISeries;

    median(): ISeries;

    first(): boolean;

    next(): boolean;

    prior(): boolean;

    last(): boolean;

    current(): ISeries;

    Row(index: number): IDataFrame;

    Col(name: string): IDataFrame;

    Delete(): boolean;

    append(): any;

    insert(): any;

    groupby(): IGroupby;

    addColumn(column: string, values: ISeries | ArrayType1D, options?: { inplace?: boolean; atIndex?: number | string }): IDataFrame;

}

export interface IDataFramePosMapping {
    [index: number]: number;
    [column: string]: number;
};

export interface ISheetFormula {

}

