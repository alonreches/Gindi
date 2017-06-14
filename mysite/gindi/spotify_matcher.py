import spotipy
import sys
from spotipy.oauth2 import SpotifyClientCredentials


SPOTIPY_CLIENT_ID='0d1e517c25ca4a39bf64e9d094646f91'
SPOTIPY_CLIENT_SECRET='2ab6422a6ab741f4bd44344e88437910'
SPOTIPY_REDIRECT_URI='http://localhost:8888/callback'


label = ['']

sp_c = SpotifyClientCredentials(client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET, proxies=None)
sp = spotipy.Spotify(client_credentials_manager=sp_c)



def get_recommendations(color, labels):
    genre = []
    genre_pres = 0

    danceability = 0.5
    energy = 0.5
    # instrumentalness = 0.5
    liveness = 0.5
    valence = 0.5
    loudness = -30
    popularity = 50
    tempo = 130

    for label in labels.keys():
        if (label == "modern"):
            popularity += 10
            liveness += 0.1
            loudness -= 10
            genre.append(('indie', labels[label]))

        if (label == "graffiti"):
            danceability += 0.1
            energy += 0.1
            tempo += 10
            genre.append(('hip-hop', labels[label]))

        if (label == "acrylic"):
            tempo -= 10
            popularity -= 10
            liveness += 0.1
            genre.append(('jazz', labels[label]))

        if (label == "child"):
            danceability += 0.1
            valence += 0.1
            energy += 0.1
            genre.append(('children', labels[label]))

        if (label == "psychedelic"):
            popularity -= 10
            tempo += 10
            energy += 0.1
            genre.append(('psych-rock', labels[label]))

        if (label == "monochrome"):
            energy -= 0.1
            valence -= 0.1
            tempo -= 10
            genre.append(('industrial', labels[label]))

        if (label == "black and white"):
            tempo -= 10
            danceability -= 0.1
            liveness -= 0.1
            genre.append(('acoustic', labels[label]))

        if (label == "pattern"):
            tempo += 10
            energy += 0.1
            loudness += 10
            genre.append(('punk', labels[label]))

        if (label == "classical"):
            loudness -= 10
            danceability -= 0.1
            tempo -= 10
            genre.append(('piano', labels[label]))

        if (label == "cartoon"):
            loudness += 10
            tempo += 10
            valence += 0.1
            genre.append(('disney', labels[label]))

        if (label == "joy"):
            valence += 0.2
            energy += 0.1
            danceability += 0.1
            genre.append(('pop', labels[label]))

        if (label == "sorrow"):
            valence -= 0.2
            energy -= 0.1
            danceability -= 0.1
            genre.append(('sad', labels[label]))

        if (label == "surprise"):
            tempo += 0.1
            popularity -= 10
            energy += 0.1
            genre.append(('world-music', labels[label]))

        if (label == "middle ages"):
            danceability -= 0.1
            liveness += 0.1
            popularity -= 10
            genre.append(('fulk', labels[label]))

        if (label == "church"):
            tempo -= 10
            liveness += 0.2
            loudness += 10
            genre.append(('synth-pop', labels[label]))


        if (label == "place of worships"):
            energy -= 0.1
            liveness += 0.1
            valence -= 0.1
            genre.append(('gospel', labels[label]))

        if (label == "atmospheres"):
            tempo -= 10
            loudness -= 10
            energy -= 0.1
            genre.append(('study', labels[label]))


        if (label == "space"):
            tempo -= 10
            loudness -= 10
            danceability -= 0.1
            genre.append(('sleep', labels[label]))

        if (label == "illustration"):
            tempo += 10
            valence += 0.1
            energy += 0.1
            genre.append(('indie-pop', labels[label]))

        if (label == "text"):
            tempo += 10
            danceability -= 0.1
            liveness += 0.1
            genre.append(('singer-songwriter', labels[label]))

        if (label == "violence"):
            if (labels[label] > 0.5):
                valence -= 0.2
                loudness += 10
                energy += 0.1
                genre.append(('rock', labels[label]))



    if color[0] == 'aqua' or color[0] == 'blue' or  color[0] == "teal":
        tempo -= 10
        energy -= 0.1
        danceability += 0.1
        genre.append(("chill", color[1]))
    elif color[0] == "black" or color[0] == "navy":
        loudness += 10
        valence -=0.1
        popularity -= 10
        genre.append(("goth", color[1]))
    elif color[0] == "fuchsia" or color[0] == "purple":
        valence += 0.1
        danceability += 0.1
        popularity += 10
        genre.append(("latino", color[1]))
    elif color[0] == "green" or color[0] == "olive":
        energy -= 0.1
        liveness += 0.1
        loudness += 10
        genre.append(("techno", color[1]))
    elif color[0] == "gray":
        valence -= 0.1
        liveness -= 0.1
        popularity -= 10
        genre.append(("rainy-day", color[1]))
    elif color[0] == "lime" or color[0] == "yellow":
        valence += 0.1
        loudness += 10
        energy += 0.2
        genre.append(("k-pop", color[1]))
    elif color[0] == "red" or color[0] == "maroon":
        valence -= 0.1
        energy += 0.1
        loudness += 10
        genre.append(("swedish", color[1]))
    elif color[0] == "silver":
        danceability += 0.1
        tempo += 10
        loudness += 10
        genre.append(("disco", color[1]))
    elif color[0] == "white":
        valence += 0.1
        energy -= 0.1
        loudness -= 20
        genre.append(("opera", color[1]))
    elif color[0] == "orange":
        energy += 0.2
        popularity -= 20
        loudness += 20
        genre.append(("reggaeton", color[1]))



    sorted(genre, key=lambda x: x[1])
    final_genre_list = []
    amount_of_genres = min(len(genre), 5)
    for i in range(amount_of_genres):
        final_genre_list.append(genre[i][0])

    if len(final_genre_list) == 0:
        final_genre_list = ["chill"]

    RANGE = 0.25

    results = sp.recommendations(seed_genres = final_genre_list, limit=1,
                                 min_danceability=danceability-RANGE, max_danceability=danceability+RANGE,
                                 min_energy=energy-RANGE, max_energy=energy+RANGE,
                                 min_liveness=liveness-RANGE, max_liveness=liveness+RANGE,
                                 min_valence=valence-RANGE, max_valence=valence+RANGE,
                                 min_loudness=loudness-7.5, max_loudness=7.5,
                                 min_popularity=popularity-30, max_popularity=popularity+30,
                                 min_tempo=tempo-30, max_tempo=tempo+30)

    return results


def results_to_output(results):
    for track in results['tracks']:
        # a = sp.audio_features(track['id'])
        # print(a)
        print (track['name'], '-', track['artists'][0]['name'])

