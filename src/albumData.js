/**
 * @typedef {object} Track
 * @property {string} title - The title of the track.
 * @property {string} artist - The artist(s) of the track.
 * @property {string} duration - The duration of the track in "m:ss" format.
 * @property {string} filePath - The relative path to the audio file for the track.
 */

/**
 * @typedef {object} Album
 * @property {string} title - The main title of the album.
 * @property {string} artist - The main artist of the album.
 * @property {Track[]} tracks - An array of track objects.
 */

/**
 * Album data object.
 * This object contains all the necessary metadata for the album page,
 * including the album title, artist, and a detailed list of tracks.
 * This data is imported by main.js to dynamically populate the tracklist.
 * @type {Album}
 */
export const album = {

    title: "APEX PROTOCOL",
    artist: "AURORA BOREALIS",

    // An array of objects, where each object represents a single track on the album.
    tracks: [
        {
            title: "The Ascent",
            artist: "Cartoon & Jéja",
            duration: "3:27",
            filePath: "music/1_the-ascent.mp3"
        },
        {
            title: "Neon Drift",
            artist: "Maestro Chives & Ezgod & Neoni",
            duration: "3:42",
            filePath: "music/2_neon-drift.mp3"
        },
        {
            title: "Static Pulse",
            artist: "Elektronomia",
            duration: "3:56",
            filePath: "music/3_static-pulse.mp3"
        },
        {
            title: "Ghost in the Machine",
            artist: "Lost Sky ft. Chris Linton",
            duration: "3:14",
            filePath: "music/4_ghost-in-the-machine.mp3"
        },
        {
            title: "Apex Protocol",
            artist: "Different Heaven & EH!DE",
            duration: "4:26",
            filePath: "music/5_apex-protocol.mp3"
        },
        {
            title: "Digital Horizon",
            artist: "Syn Cole",
            duration: "3:01",
            filePath: "music/6_digital-horizon.mp3"
        },
        {
            title: "Transcendence",
            artist: "RetroVision",
            duration: "2:58",
            filePath: "music/7_transcendence.mp3"
        },
        {
            title: "Core Dump",
            artist: "Jim Yosef",
            duration: "3:43",
            filePath: "music/8_core-dump.mp3"
        },
        {
            title: "Aurora Trail",
            artist: "Sub Urban",
            duration: "3:29",
            filePath: "music/9_aurora-trail.mp3"
        },
        {
            title: "Protocol Complete",
            artist: "X972 & sk3tch01 & MXZI",
            duration: "2:02",
            filePath: "music/10_protocol-complete.mp3"
        }
    ]
};