from . models import Skill
from .serializers import SkillSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
@api_view(['GET'])
def getskills(request):
    skills = Skill.objects.all()
    serilizer = SkillSerializer(skills , many = True)
    return Response(serilizer.data)