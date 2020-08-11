#!/usr/bin/env rdmd
// Computes average line length for standard input.
import std.stdio;

void connect() {
    ulong lines = 0;
    double sumLength = 0;
    foreach (line; stdin.byLine()) {
        ++lines;
        sumLength += line.length;
    }
    writeln("Average line length: ",
        lines ? sumLength / lines : 0);
}