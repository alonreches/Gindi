from spotify_matcher import *
import io
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from get_image_data import *


def index(request):
    return HttpResponse("Hello, world")


def image_labels(request):
    res = {}
    if request.method == 'POST':
        image = request.FILES["myFile"]
        with open('picture.jpg', 'wb+') as f:
            for chunk in image.chunks():
                f.write(chunk)
        with io.open("picture.jpg", "rb") as pic:
            content = pic.read()
        gen_image(content)
        color = get_color_by_image(content)
        labels = get_image_data(content)
        song = get_recommendations(color, labels)["tracks"][0]
        res["name"] = song["name"]
        res["album"] = song["album"]["name"]
        res["artist"] = song["artists"][0]["name"]
        res["cover"] = song["album"]["images"][0]["url"]
        res["words"] = get_keywords(content)
        return JsonResponse(res)
    return HttpResponse("bad request")


def image_color(request):
    return HttpResponse(get_color_by_image(request.body))




"""
options for request:
COOKIES
FILES
GET
META
POST
body
build_absolute_uri
close
content_params
content_type
csrf_processing_done
encoding
environ
get_full_path
get_host
get_port
get_raw_uri
get_signed_cookie
is_ajax
is_secure
method
parse_file_upload
path
path_info
read
readline
readlines
resolver_match
scheme
session
upload_handlers
user
xreadlines
"""
