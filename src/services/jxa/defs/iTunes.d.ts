export namespace ITunes {
  // Default Application
  export interface Application {}

  // types
  export type File = any
  export type Picture = any
  export type RawData = string
  export type Real = number
  export type DoubleInteger = number
  export type DataType = string

  export type AirPlayDeviceKindType =
    | 'track listing'
    | 'album listing'
    | 'cd insert'
  export type PlayerStateType =
    | 'stopped'
    | 'playing'
    | 'paused'
    | 'fast forwarding'
    | 'rewinding'
  export type SourceKindType =
    | 'library'
    | 'iPod'
    | 'audio CD'
    | 'MP3 CD'
    | 'radio tuner'
    | 'shared library'
    | 'iTunes Store'
    | 'unknown'
  export type CloudStatusType =
    | 'unknown'
    | 'purchased'
    | 'matched'
    | 'uploaded'
    | 'ineligible'
    | 'removed'
    | 'error'
    | 'duplicate'
    | 'subscription'
    | 'no longer available'
    | 'not uploaded'
  export type MediaKindType =
    | 'alert tone'
    | 'audiobook'
    | 'book'
    | 'home video'
    | 'iTunesU'
    | 'movie'
    | 'song'
    | 'music video'
    | 'podcast'
    | 'ringtone'
    | 'TV show'
    | 'voice memo'
    | 'unknown'
  export type VideoKindType =
    | 'none'
    | 'home video'
    | 'movie'
    | 'music video'
    | 'TV show'
  export type SpecialKindType =
    | 'none'
    | 'Books'
    | 'folder'
    | 'Genius'
    | 'iTunes U'
    | 'Library'
    | 'Movies'
    | 'Music'
    | 'Podcasts'
    | 'Purchased Music'
    | 'TV Shows'
  export type PrintKindType = "track listing" | "album listing" | "cd insert"
  export type ShuffleModeType = 'songs' | 'albums' | 'groupings'
  export type SongRepeatType = 'off' | 'one' | 'all'
  export type VisualSizeType = 'small' | 'medium' | 'large'
  export type AlbumRatingKindType = 'user' | 'computed'
  export type RatingKindType = 'user' | 'computed'
  export type ErrorHandlingType = "standard" | "detailed"
  export type SearchOnlyType =  "albums" | "all" | "artists" | "composers" | "displayed" | "songs"

  // Class

  export interface Point {
    x: number
    y: number
  }

  export interface Rectangle {
    x: number
    y: number
    width: number
    height: number
  }

  /**
   * an AirPlay device
   */
  export interface AirPlayDevice extends Item {
    /**
     * is the device currently being played to?
     */
    active(): boolean
    /**
     * is the device currently available?
     */
    available(): boolean
    /**
     * the kind of the device
     */
    kind(): AirPlayDeviceKindType
    /**
     * the network (MAC) address of the device
     */
    networkAddress(): string
    /**
     * is the device password- or passcode-protected?
     */
    protected(): boolean
    /**
     * is the device currently selected?
     */
    selected(): boolean
    /**
     * does the device support audio playback?
     */
    supportsAudio(): boolean
    /**
     * does the device support video playback?
     */
    supportsVideo(): boolean
    /**
     * the output volume for the device (0 = minimum, 100 = maximum)
     */
    soundVolume(): number
  }

  /**
   * The application program
   */
  export interface Application {
    /* contains: */
    airplayDevices(): AirPlayDevice[]
    browserWindows(): BrowserWindow[]
    encoders(): Encoder[]
    eqPresets(): EQPreset[]
    eqWindows(): EQWindow[]
    miniplayerWindows(): MiniplayerWindow[]
    playlists(): Playlist[]
    playlistWindows(): PlaylistWindow[]
    sources(): Source[]
    tracks(): Track[]
    videoWindows(): VideoWindow[]
    visuals(): Visual[]
    windows(): Window[]

    /**
     * is AirPlay currently enabled?
     */
    airPlayEnabled(): boolean
    /**
     * is a track currently being converted?
     */
    converting(): boolean
    /**
     * the currently selected AirPlay device(s)
     */
    currentAirPlayDevices(): AirPlayDevice[]
    /**
     * the currently selected encoder (MP3, AIFF, WAV, etc.)
     */
    currentEncoder(): Encoder
    /**
     * the currently selected equalizer preset
     */
    currentEQPreset(): EQPreset
    /**
     * the playlist containing the currently targeted track
     */
    currentPlaylist(): Playlist
    /**
     * the name of the current song in the playing stream (provided by streaming server)
     */
    currentStreamTitle(): string
    /**
     * the URL of the playing stream or streaming web site (provided by streaming server)
     */
    currentStreamURL(): string
    /**
     * the current targeted track
     */
    currentTrack(): Track
    /**
     * the currently selected visual plug-in
     */
    currentVisual(): Visual
    /**
     * is the equalizer enabled?
     */
    EQEnabled(): boolean
    /**
     * true if all AppleScript track indices should be independent of the play order of the owning playlist.
     */
    fixedIndexing(): boolean
    /**
     * is ITunes the frontmost application?
     */
    frontmost(): boolean
    /**
     * are visuals displayed using the entire screen?
     */
    fullScreen(): boolean
    /**
     * the name of the application
     */
    name(): string
    /**
     * has the sound output been muted?
     */
    mute(): boolean
    /**
     * the player’s position within the currently playing track in seconds.
     */
    playerPosition(): number
    /**
     * is ITunes stopped, paused, or playing?
     */
    playerState(): PlayerStateType
    /**
     * the selection visible to the user
     */
    selection(): Track[]
    /**
     * are songs played in random order?
     */
    shuffleEnabled(): boolean
    /**
     * the playback shuffle mode
     */
    shuffleMode(): ShuffleModeType
    /**
     * the playback repeat mode
     */
    songRepeat(): SongRepeatType
    /**
     * the sound output volume (0 = minimum, 100 = maximum)
     */
    soundVolume(): number
    /**
     * the version of ITunes
     */
    version(): string
    /**
     * are visuals currently being displayed?
     */
    visualsEnabled(): boolean
    /**
     * the size of the displayed visual
     */
    visualSize(): VisualSizeType
  }
  /**
   * a piece of art within a track or playlist
   */
  export interface Artwork extends Item {
    /**
     * data for this artwork, in the form of a picture
     */
    data(): Picture
    /**
     * description of artwork as a string
     */
    description(): string
    /**
     * was this artwork downloaded by ITunes?
     */
    downloaded(): boolean
    /**
     * the data format for this piece of artwork
     */
    format(): DataType
    /**
     * kind or purpose of this piece of artwork
     */
    kind(): number
    /**
     * data for this artwork, in original format
     */
    rawData(): RawData
  }

  /**
   * a playlist representing an audio CD
   */
  export interface AudioCDPlaylist extends Playlist {
    /* contains: */
    audioCDTracks(): AudioCDTrack[]

    /**
     * the artist of the CD
     */
    artist(): string
    /**
     * is this CD a compilation album?
     */
    compilation(): boolean
    /**
     * the composer of the CD
     */
    composer(): string
    /**
     * the total number of discs in this CD’s album
     */
    discCount(): number
    /**
     * the index of this CD disc in the source album
     */
    discNumber(): number
    /**
     * the genre of the CD
     */
    genre(): string
    /**
     * the year the album was recorded/released
     */
    year(): number
  }

  /**
   * a track on an audio CD
   */
  export interface AudioCDTrack extends Track {
    /**
     * the location of the file represented by this track
     */
    location(): File
  }

  /**
   * the main ITunes window
   */
  export interface BrowserWindow extends Window {
    /**
     * the selected songs
     */
    selection(): Track[]
    /**
     * the playlist currently displayed in the window
     */
    view(): Playlist
  }

  /**
   * converts a track to a specific file format
   */
  export interface Encoder extends Item {
    /**
     * the data format created by the encoder
     */
    format(): string
  }

  /**
   * equalizer preset configuration
   */
  export interface EQPreset extends Item {
    /**
     * the equalizer 32 Hz band level (-12.0 dB to +12.0 dB)
     */
    band1(): Real
    /**
     * the equalizer 64 Hz band level (-12.0 dB to +12.0 dB)
     */
    band2(): Real
    /**
     * the equalizer 125 Hz band level (-12.0 dB to +12.0 dB)
     */
    band3(): Real
    /**
     * the equalizer 250 Hz band level (-12.0 dB to +12.0 dB)
     */
    band4(): Real
    /**
     * the equalizer 500 Hz band level (-12.0 dB to +12.0 dB)
     */
    band5(): Real
    /**
     * the equalizer 1 kHz band level (-12.0 dB to +12.0 dB)
     */
    band6(): Real
    /**
     * the equalizer 2 kHz band level (-12.0 dB to +12.0 dB)
     */
    band7(): Real
    /**
     * the equalizer 4 kHz band level (-12.0 dB to +12.0 dB)
     */
    band8(): Real
    /**
     * the equalizer 8 kHz band level (-12.0 dB to +12.0 dB)
     */
    band9(): Real
    /**
     * the equalizer 16 kHz band level (-12.0 dB to +12.0 dB)
     */
    band10(): Real
    /**
     * can this preset be modified?
     */
    modifiable(): boolean
    /**
     * the equalizer preamp level (-12.0 dB to +12.0 dB)
     */
    preamp(): Real
    /**
     * should tracks which refer to this preset be updated when the preset is renamed or deleted?
     */
    updateTracks(): boolean
  }

  /**
   * the ITunes equalizer window
   */
  export interface EQWindow extends Window {}

  /**
   * a track representing an audio file (MP3, AIFF, etc.)
   */
  export interface FileTrack extends Track {
    /**
     * the location of the file represented by this track
     */
    location(): File
  }

  /**
   * a folder that contains other playlists
   */
  export interface FolderPlaylist extends UserPlaylist {}

  /**
   * an item
   */
  export interface Item {
    /**
     * the class of the item
     */
    class(): any // type
    /**
     * the container of the item
     */
    container(): any // specifier
    /**
     * the id of the item
     */
    id(): number
    /**
     * The index of the item in internal application order.
     */
    index(): number
    /**
     * the name of the item
     */
    name(): string
    /**
     * the id of the item as a hexadecimal string. This id does not change over time.
     */
    persistentID(): string
    /**
     * every property of the item
     */
    properties(): any // record
  }

  /**
   * the master music library playlist
   */
  export interface LibraryPlaylist extends Playlist {
    /* contains: */
    fileTracks(): FileTrack[]
    urlTracks(): URLTrack[]
    sharedTracks(): SharedTrack[]
  }

  /**
   * the miniplayer window
   */
  export interface MiniplayerWindow extends Window {}

  /**
   * a list of songs/streams
   */
  export interface Playlist extends Item {
    /* contains: */
    tracks(): Track[]
    artworks(): Artwork[]

    /**
     * the description of the playlist
     */
    description(): string
    /**
     * is this playlist disliked?
     */
    disliked(): boolean
    /**
     * the total length of all songs (in seconds)
     */
    duration(): number
    /**
     * the name of the playlist
     */
    name(): string
    /**
     * is this playlist loved?
     */
    loved(): boolean
    /**
     * folder which contains this playlist (if any)
     */
    parent(): Playlist | undefined
    /**
     * play the songs in this playlist in random order? (obsolete; always false)
     */
    shuffle(): boolean
    /**
     * the total size of all songs (in bytes)
     */
    size(): number
    /**
     * playback repeat mode (obsolete; always off)
     */
    songRepeat(): SongRepeatType
    /**
     * special playlist kind
     */
    specialKind(): SpecialKindType
    /**
     * the length of all songs in MM:SS format
     */
    time(): string
    /**
     * is this playlist visible in the Source list?
     */
    visible(): boolean
  }

  /**
   * a sub-window showing a single playlist
   */
  export interface PlaylistWindow extends Playlist {
    /**
     * the selected songs
     */
    selection(): Track[]
    /**
     * the playlist displayed in the window
     */
    view(): Playlist
  }

  /**
   * the radio tuner playlist
   */
  export interface RadioTunerPlaylist extends Playlist {
    /* contains: */
    urlTracks(): URLTrack[]
  }

  /**
   * a track residing in a shared library
   */
  export interface SharedTrack extends Track {}

  /**
   * a music source (music library, CD, device, etc.)
   */
  export interface Source extends Item {
    /* contains: */
    audioCDPlaylists(): AudioCDPlaylist[]
    libraryPlaylists(): LibraryPlaylist[]
    playlists(): Playlist[]
    radioTunerPlaylists(): RadioTunerPlaylist[]
    subscriptionPlaylists(): SubscriptionPlaylist[]
    userPlaylists(): UserPlaylist[]

    /**
     * the total size of the source if it has a fixed size
     */
    capacity(): DoubleInteger
    /**
     * the free space on the source if it has a fixed size
     */
    freeSpace(): DoubleInteger
    kind(): SourceKindType
  }

  /**
   * a subscription playlist from Apple Music
   */
  export interface SubscriptionPlaylist extends Playlist {
    /* contains: */
    fileTracks(): FileTrack[]
    urlTracks(): URLTrack[]
  }

  /**
   * playable audio source
   */
  export interface Track extends Item {
    /* contains: */
    artworks(): Artwork[]

    /**
     * the album name of the track
     */
    album(): string
    /**
     * the album artist of the track
     */
    albumArtist(): string
    /**
     * is the album for this track disliked?
     */
    albumDisliked(): boolean
    /**
     * is the album for this track loved?
     */
    albumLoved(): boolean
    /**
     * the rating of the album for this track (0 to 100)
     */
    albumRating(): number
    /**
     * the rating kind of the album rating for this track
     */
    albumRatingKind(): AlbumRatingKindType
    /**
     * the artist/source of the track
     */
    artist(): string
    /**
     * the bit rate of the track (in kbps)
     */
    bitRate(): number
    /**
     * the bookmark time of the track in seconds
     */
    bookmark(): number
    /**
     * is the playback position for this track remembered?
     */
    bookmarkable(): boolean
    /**
     * the tempo of this track in beats per minute
     */
    bpm(): number
    /**
     * the category of the track
     */
    category(): string
    /**
     * the iCloud status of the track
     */
    cloudStatus(): CloudStatusType
    /**
     * freeform notes about the track
     */
    comment(): string
    /**
     * is this track from a compilation album?
     */
    compilation(): boolean
    /**
     * the composer of the track
     */
    composer(): string
    /**
     * the common, unique ID for this track. If two tracks in different playlists have the same database ID, they are sharing the same data.
     */
    databaseID(): number
    /**
     * the date the track was added to the playlist
     */
    dateAdded(): Date
    /**
     * the description of the track
     */
    description(): string
    /**
     * the total number of discs in the source album
     */
    discCount(): number
    /**
     * the index of the disc containing this track on the source album
     */
    discNumber(): number
    /**
     * is this track disliked?
     */
    disliked(): boolean
    /**
     * the Apple ID of the person who downloaded this track
     */
    downloaderAppleID(): string
    /**
     * the name of the person who downloaded this track
     */
    downloaderName(): string
    /**
     * the length of the track in seconds
     */
    duration(): Real
    /**
     * is this track checked for playback?
     */
    enabled(): boolean
    /**
     * the episode ID of the track
     */
    episodeID(): string
    /**
     * the episode number of the track
     */
    episodeNumber(): number
    /**
     * the name of the EQ preset of the track
     */
    EQ(): string
    /**
     * the stop time of the track in seconds
     */
    finish(): Real
    /**
     * is this track from a gapless album?
     */
    gapless(): boolean
    /**
     * the music/audio genre (category) of the track
     */
    genre(): string
    /**
     * the grouping (piece) of the track. Generally used to denote movements within a classical work.
     */
    grouping(): string
    /**
     * a text description of the track
     */
    kind(): string
    longDescription(): string
    /**
     * is this track loved?
     */
    loved(): boolean
    /**
     * the lyrics of the track
     */
    lyrics(): string
    /**
     * the media kind of the track
     */
    mediaKind(): MediaKindType
    /**
     * the modification date of the content of this track
     */
    modificationDate(): Date
    /**
     * the movement name of the track
     */
    movement(): string
    /**
     * the total number of movements in the work
     */
    movementCount(): number
    /**
     * the index of the movement in the work
     */
    movementNumber(): number
    /**
     * number of times this track has been played
     */
    playedCount(): number
    /**
     * the date and time this track was last played
     */
    playedDate(): Date
    /**
     * the Apple ID of the person who purchased this track
     */
    purchaserAppleID(): string
    /**
     * the name of the person who purchased this track
     */
    purchaserName(): string
    /**
     * the rating of this track (0 to 100)
     */
    rating(): number
    /**
     * the rating kind of this track
     */
    ratingKind(): RatingKindType
    /**
     * the release date of this track
     */
    releaseDate(): Date
    /**
     * the sample rate of the track (in Hz)
     */
    sampleRate(): number
    /**
     * the season number of the track
     */
    seasonNumber(): number
    /**
     * is this track included when shuffling?
     */
    shufflable(): boolean
    /**
     * number of times this track has been skipped
     */
    skippedCount(): number
    /**
     * the date and time this track was last skipped
     */
    skippedDate(): Date
    /**
     * the show name of the track
     */
    show(): string
    /**
     * override string to use for the track when sorting by album
     */
    sortAlbum(): string
    /**
     * override string to use for the track when sorting by artist
     */
    sortArtist(): string
    /**
     * override string to use for the track when sorting by album artist
     */
    sortAlbumArtist(): string
    /**
     * override string to use for the track when sorting by name
     */
    sortName(): string
    /**
     * override string to use for the track when sorting by composer
     */
    sortComposer(): string
    /**
     * override string to use for the track when sorting by show name
     */
    sortShow(): string
    /**
     * the size of the track (in bytes)
     */
    size(): DoubleInteger
    /**
     * the start time of the track in seconds
     */
    start(): Real
    /**
     * the length of the track in MM:SS format
     */
    time(): string
    /**
     * the total number of tracks on the source album
     */
    trackCount(): number
    /**
     * the index of the track on the source album
     */
    trackNumber(): number
    /**
     * is this track unplayed?
     */
    unplayed(): boolean
    /**
     * kind of video track
     */
    videoKind(): VideoKindType
    /**
     * relative volume adjustment of the track (-100% to 100%)
     */
    volumeAdjustment(): number
    /**
     * the work name of the track
     */
    work(): string
    /**
     * the year the track was recorded/released
     */
    year(): number
  }

  /**
   * a track representing a network stream
   */
  export interface URLTrack extends Track {
    /**
     * the URL for this track
     */
    address(): string
  }

  /**
   * custom playlists created by the user
   */
  export interface UserPlaylist extends Playlist {
    /* contains: */
    fileTracks(): FileTrack[]
    urlTracks(): URLTrack[]
    sharedTracks(): SharedTrack[]

    /**
     * is this playlist shared?
     */
    shared(): boolean
    /**
     * is this a Smart Playlist?
     */
    smart(): boolean
    /**
     * is this a Genius Playlist?
     */
    genius(): boolean
  }

  /**
   * the video window
   */
  export interface VideoWindow extends Window {}

  /**
   * a visual plug-in
   */
  export interface Visual extends Item {}

  /**
   * any window
   */
  export interface Window extends Item {
    /**
     * the boundary rectangle for the window
     */
    bounds(): Rectangle
    /**
     * does the window have a close button?
     */
    closeable(): boolean
    /**
     * does the window have a collapse button?
     */
    collapseable(): boolean
    /**
     * is the window collapsed?
     */
    collapsed(): boolean
    /**
     * is the window full screen?
     */
    fullScreen(): boolean
    /**
     * the upper left position of the window
     */
    position(): Point
    /**
     * is the window resizable?
     */
    resizable(): boolean
    /**
     * is the window visible?
     */
    visible(): boolean
    /**
     * is the window zoomable?
     */
    zoomable(): boolean
    /**
     * is the window zoomed?
     */
    zoomed(): boolean
  }

  // Class Extension

  // Records
  export interface PrintSettings {
    /**
     * the number of copies of a document to be printed
     */
    copies(): number
    /**
     * Should printed copies be collated?
     */
    collating(): boolean
    /**
     * the first page of the document to be printed
     */
    startingPage(): number
    /**
     * the last page of the document to be printed
     */
    endingPage(): number
    /**
     * number of logical pages laid across a physical page
     */
    pagesAcross(): number
    /**
     * number of logical pages laid out down a physical page
     */
    pagesDown(): number
    /**
     * how errors are handled
     */
    errorHandling(): ErrorHandlingType
    /**
     * the time at which the desktop printer should print the document
     */
    requestedPrintTime(): Date
    /**
     * printer specific options
     */
    printerFeatures(): string[]
    /**
     * for fax number
     */
    faxNumber(): string
    /**
     * for target printer
     */
    targetPrinter(): string
  }

  // Function options
  export interface PrintOptionalParameter {
    /**
     * Should the application show the print dialog
     */
    printDialog?: boolean
    /**
     * the print settings
     */
    withProperties?: PrintSettings
    /**
     * the kind of printout desired
     */
    kind?: PrintKindType
    /**
     * name of theme to use for formatting the printout
     */
    theme?: string
  }
  export interface CountOptionalParameter {
    /**
     * the class of the elements to be counted. Keyword 'each' is optional in AppleScript
     */
    each: any
  }
  export interface DuplicateOptionalParameter {
    /**
     * the new location for the object(s)
     */
    to?: any
  }
  export interface MakeOptionalParameter {
    /**
     * the class of the new element. Keyword 'new' is optional in AppleScript
     */
    new: any
    /**
     * the location at which to insert the element
     */
    at?: any
    /**
     * the initial values for the properties of the element
     */
    withProperties?: any
  }

  export interface MoveOptionalParameter {
    /**
     * the new location for the playlist(s)
     */
    to: any
  }

  export interface AddOptionalParameter {
    /**
     * the location of the added file(s)
     */
    to?: any
  }

  export interface PlayOptionalParameter {
    /**
     * If true, play this track once and then stop.
     */
    once?: boolean
  }

  export interface SearchOptionalParameter {
    /**
     * the search text
     */
    for: string
    /**
     * area to search (default is all)
     */
    only?: SearchOnlyType
  }
}

export interface ITunes extends ITunes.Application {
  // Functions

  /**
   * Print the specified object(s)
   * @param directParameter list of objects to print
   * @param option
   *
   */
  print(directParameter?: any, option?: ITunes.PrintOptionalParameter): void

  /**
   * Close an object
   * @param directParameter the object to close
   *
   */
  close(directParameter: any): void

  /**
   * Return the number of elements of a particular class within an object
   * @param directParameter the object whose elements are to be counted
   * @param option
   * @return the number of elements
   */
  count(directParameter: any, option?: ITunes.CountOptionalParameter): number

  /**
   * Delete an element from an object
   * @param directParameter the element to delete
   *
   */
  delete(directParameter: any): void

  /**
   * Duplicate one or more object(s)
   * @param directParameter the object(s) to duplicate
   * @param option
   * @return to the duplicated object(s)
   */
  duplicate(
    directParameter: any,
    option?: ITunes.DuplicateOptionalParameter
  ): any

  /**
   * Verify if an object exists
   * @param directParameter the object in question
   * @return true if it exists, false if not
   */
  exists(directParameter: any): boolean

  /**
   * Make a new element
   * @param option
   * @return to the new object(s)
   */
  make(option?: ITunes.MakeOptionalParameter): any

  /**
   * Move playlist(s) to a new location
   * @param directParameter the playlist(s) to move
   * @param option
   *
   */
  move(
    directParameter: ITunes.Playlist,
    option?: ITunes.MoveOptionalParameter
  ): void

  /**
   * Open the specified object(s)
   * @param directParameter list of objects to open
   *
   */
  open(directParameter: any): void

  /**
   * Run ITunes
   *
   */
  run(): void

  /**
   * Quit ITunes
   *
   */
  quit(): void

  /**
   * Save the specified object(s)
   * @param directParameter the object(s) to save
   *
   */
  save(directParameter: any): void

  /**
   * add one or more files to a playlist
   * @param directParameter the file(s) to add
   * @param option
   * @return reference to added track(s)
   */
  add(directParameter: {}, option?: ITunes.AddOptionalParameter): ITunes.Track

  /**
   * reposition to beginning of current track or go to previous track if already at start of current track
   *
   */
  backTrack(): void

  /**
   * convert one or more files or tracks
   * @param directParameter the file(s)/tracks(s) to convert
   * @return reference to converted track(s)
   */
  convert(directParameter: {}): ITunes.Track

  /**
   * download a cloud track or playlist, or a podcast episode
   * @param directParameter the shared track, URL track or playlist to download
   *
   */
  download(directParameter: ITunes.Item): void

  /**
   * eject the specified iPod
   * @param directParameter the iPod to eject
   *
   */
  eject(directParameter?: ITunes.Source): void

  /**
   * skip forward in a playing track
   *
   */
  fastForward(): void

  /**
   * advance to the next track in the current playlist
   *
   */
  nextTrack(): void

  /**
   * pause playback
   *
   */
  pause(): void

  /**
   * play the current track or the specified track or file.
   * @param directParameter item to play
   * @param option
   *
   */
  play(directParameter?: any, option?: ITunes.PlayOptionalParameter): void

  /**
   * toggle the playing/paused state of the current track
   *
   */
  playpause(): void

  /**
   * return to the previous track in the current playlist
   *
   */
  previousTrack(): void

  /**
   * update file track information from the current information in the track’s file
   * @param directParameter the file track to update
   *
   */
  refresh(directParameter: ITunes.FileTrack): void

  /**
   * disable fast forward/rewind and resume playback, if playing.
   *
   */
  resume(): void

  /**
   * reveal and select a track or playlist
   * @param directParameter the item to reveal
   *
   */
  reveal(directParameter: ITunes.Item): void

  /**
   * skip backwards in a playing track
   *
   */
  rewind(): void

  /**
   * search a playlist for tracks matching the search string. Identical to entering search text in the Search field in ITunes.
   * @param directParameter the playlist to search
   * @param option
   * @return reference to found track(s)
   */
  search(
    directParameter: ITunes.Playlist,
    option?: ITunes.SearchOptionalParameter
  ): ITunes.Track

  /**
   * select the specified object(s)
   * @param directParameter the object(s) to select
   *
   */
  select(directParameter: any): void

  /**
   * stop playback
   *
   */
  stop(): void

  /**
   * subscribe to a podcast feed
   * @param directParameter the URL of the feed to subscribe to
   *
   */
  subscribe(directParameter: string): void

  /**
   * update the specified iPod
   * @param directParameter the iPod to update
   *
   */
  update(directParameter?: ITunes.Source): void

  /**
   * update all subscribed podcast feeds
   *
   */
  updateAllPodcasts(): void

  /**
   * update podcast feed
   *
   */
  updatePodcast(): void

  /**
   * Opens a Music Store or audio stream URL
   * @param directParameter the URL to open
   *
   */
  openLocation(directParameter?: string): void
}
