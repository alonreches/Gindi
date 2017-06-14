import webcolors
from google.cloud import vision

WHITE_LABELS_LIST = ["modern","graffiti", "acrylic", "child", "psychedelic", "monochrome",
                     "black and white", "pattern", "classical", "cartoon", "joy", "sorrow",
                     "surprise", "middle ages", "church", "place of worship", "atmosphere",
                     "space", "illustration", "text"]
LIKELINESS = {"UNKNOWN": 0,
              "VERY_UNLIKELY": 0,
              "UNLIKELY": 0.2,
              "POSSIBLE": 0.5,
              "LIKELY": 0.7,
              "VERY_LIKELY": 0.95}

vision_client = vision.Client("AIzaSyArQ4BOzwsUvc1gBiXMM580DIxCeEP58vs")


def get_image_data(image):
    result = {}
    image_data = vision_client.image(content=image)
    safe_search = image_data.detect_safe_search()
    result["violence"] = LIKELINESS[safe_search.violence.name]
    labels = image_data.detect_labels()
    for label in labels:
        description = label.description
        if "modern" in description:
            description = "modern"
        if description in WHITE_LABELS_LIST:
            result[description] = label.score
    return result


def get_color_by_image(image):
    image_data = vision_client.image(content=image)
    properties = image_data.detect_properties()
    colors = properties.colors
    colors.sort(key=lambda x: x.score, reverse=True)
    color = get_colour_name([colors[0].color.red,colors[0].color.green, colors[0].color.blue])
    return color, colors[0].score


def get_colour_name(rgb_triplet):
    min_colours = {}
    for key, name in webcolors.css21_hex_to_names.items():
        r_c, g_c, b_c = webcolors.hex_to_rgb(key)
        rd = (r_c - rgb_triplet[0]) ** 2
        gd = (g_c - rgb_triplet[1]) ** 2
        bd = (b_c - rgb_triplet[2]) ** 2
        min_colours[(rd + gd + bd)] = name
    return min_colours[min(min_colours.keys())]
