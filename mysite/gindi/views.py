from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    print(dir(request))
    return HttpResponse("Hello, world")



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
