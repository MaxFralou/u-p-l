import webpack from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";

export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
    const {paths, mode} = option;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders(),
        },
        resolve:buildResolves(),
    }
}