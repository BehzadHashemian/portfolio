from . models import Skill, Project
from .serializers import SkillSerializer, ProjectSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
@api_view(['GET'])
def getskills(request):
    skills = Skill.objects.all()
    serilizer = SkillSerializer(skills , many = True)
    return Response(serilizer.data)
@api_view(['GET'])
def getproject(request):
    projects = Project.objects.all()
    serilizer = ProjectSerializer(projects , many = True)
    return Response(serilizer.data)